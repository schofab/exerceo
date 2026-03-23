-- ============================================================
-- Migration : profils d'apprentissage + détection des faiblesses
-- ============================================================

-- 1. Colonne learning_profile sur la table enfants
ALTER TABLE enfants
  ADD COLUMN IF NOT EXISTS learning_profile TEXT
    NOT NULL
    DEFAULT 'standard'
    CHECK (learning_profile IN (
      'standard',
      'lecture_simplifiee',
      'attention_courte',
      'progressif',
      'defi_avance'
    ));

-- ============================================================
-- 2. RPC : statistiques par notion pour un enfant
--
-- Pour chaque sous-matière travaillée, retourne :
--   • nb_exercices    → nombre d'exercices répondus (au moins une fois)
--   • nb_corrects     → nombre de bonnes réponses (dernière tentative)
--   • taux_reussite   → pourcentage arrondi
--   • est_fragile     → vrai si nb_exercices >= 3 ET taux < 60 %
--
-- Utilise la DERNIÈRE réponse par exercice (gestion des "essaie encore").
-- Filtre les notions avec moins de 3 exercices (pas significatif).
-- ============================================================

CREATE OR REPLACE FUNCTION get_faiblesses_enfant(p_enfant_id uuid)
RETURNS TABLE(
  sous_matiere    text,
  matiere         text,
  nb_exercices    bigint,
  nb_corrects     bigint,
  taux_reussite   numeric,
  est_fragile     boolean
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  WITH derniere_reponse AS (
    -- Dernière réponse par exercice (en cas de "Essaie encore")
    SELECT DISTINCT ON (exercice_id)
      exercice_id,
      est_correct
    FROM reponses
    ORDER BY exercice_id, created_at DESC
  ),
  exercices_enfant AS (
    -- Tous les exercices répondus pour cet enfant
    SELECT
      e.matiere,
      COALESCE(NULLIF(e.contenu->>'sous_matiere', ''), e.matiere) AS sous_matiere,
      dr.est_correct
    FROM exercices e
    JOIN sessions s   ON e.session_id = s.id
    JOIN derniere_reponse dr ON dr.exercice_id = e.id
    WHERE s.enfant_id = p_enfant_id
  )
  SELECT
    ee.sous_matiere,
    ee.matiere,
    COUNT(*)                                                          AS nb_exercices,
    COUNT(*) FILTER (WHERE ee.est_correct = true)                    AS nb_corrects,
    ROUND(
      COUNT(*) FILTER (WHERE ee.est_correct = true)::numeric
      / COUNT(*)::numeric * 100,
      0
    )                                                                 AS taux_reussite,
    (
      COUNT(*) >= 3 AND
      COUNT(*) FILTER (WHERE ee.est_correct = true)::numeric
        / COUNT(*)::numeric < 0.60
    )                                                                 AS est_fragile
  FROM exercices_enfant ee
  GROUP BY ee.sous_matiere, ee.matiere
  HAVING COUNT(*) >= 3   -- seuil minimum de significativité
  ORDER BY taux_reussite ASC;
$$;
