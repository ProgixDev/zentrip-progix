/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix · ZenTrip",
  shortName: "ZenTrip",
  description:
    "Devis contractuel Progix : développement de ZenTrip, application mobile et web de planification de road trip par intelligence artificielle. Génération d’itinéraire en langage naturel, alternatives comparées, budget intelligent, checklist personnalisée, profil véhicule hors gabarit, carte interactive hors ligne, entretien du véhicule, carnet de voyage, infrastructure cloud, publication sur les stores et accompagnement marketing de 90 jours inclus.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;
