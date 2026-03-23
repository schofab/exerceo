import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "exerceō — Des exercices sur-mesure pour votre enfant",
  description:
    "En 30 secondes, générez des exercices ludiques et personnalisés selon la classe, le niveau et les besoins de votre enfant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
