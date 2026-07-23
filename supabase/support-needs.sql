-- ============================================================
-- Migration : besoins d'adaptation (support_needs) sur la table enfants
--
-- Ajoute une colonne JSONB pour stocker les besoins d'adaptation déclarés
-- par le parent. Ces informations ne constituent pas un diagnostic médical :
-- elles servent uniquement à adapter le format et la présentation des
-- exercices dans l'application.
--
-- Valeurs par défaut : tous les drapeaux à false (rétrocompatibilité totale
-- avec les profils existants).
-- ============================================================

ALTER TABLE public.enfants
  ADD COLUMN IF NOT EXISTS support_needs JSONB
    NOT NULL
    DEFAULT '{"dyslexia":false,"dysorthography":false,"dyscalculia":false,"dyspraxia":false,"attentionSupport":false}'::jsonb;
