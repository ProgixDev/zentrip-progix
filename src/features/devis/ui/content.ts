/**
 * Faithful content for the Progix "Devis contractuel" — ZenTrip, application de
 * planification de road trip par intelligence artificielle. List-shaped data
 * lives here; prose with inline emphasis is authored in the section JSX.
 *
 * All copy uses French typography (’ « » … —) — keep it that way.
 * Amounts are in euros (€). Service international fourni par une société
 * canadienne — aucune taxe applicable.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre",
  titleLight: "copilote de road trip par intelligence artificielle",
  subtitle:
    "ZenTrip : application mobile et web qui prépare, optimise et accompagne un road trip de bout en bout. À partir d’une simple description en langage naturel, l’application génère l’itinéraire complet, les étapes jour par jour, les hébergements, le budget prévisionnel, la checklist personnalisée et plusieurs alternatives comparées, puis accompagne le voyageur sur la route avec une carte interactive hors ligne, le suivi du véhicule et le carnet de voyage. Applications iOS et Android, application web, portail d’administration, infrastructure cloud et 90 jours d’accompagnement marketing inclus.",
  // Aucun montant en couverture : le prix est traité en section 03 uniquement.
  badges: [
    { l: "Délai de développement", v: "90", u: " jours" },
    { l: "Supports livrés", v: "3", u: " · iOS, Android & web" },
    { l: "Accompagnement marketing", v: "90", u: " jours inclus" },
  ],
  meta: [
    { l: "Projet", v: "ZenTrip : planification de road trip par IA" },
    { l: "Client", v: "____________" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026-____ · ____________" },
  ],
} as const;

export const trust = [
  { n: "12+", l: "ingénieurs et spécialistes" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "propriété transférée au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — prestations included, grouped. `b` is emphasized, `t` follows. */
export const incl1 = [
  {
    b: "Profil voyageur",
    t: " : adultes, enfants et âges, animaux, centres d’intérêt, type de voyage, mobilité réduite",
  },
  {
    b: "Profil véhicule",
    t: " : dimensions porte-vélos et galerie inclus, PTAC, consommation, carburant, réservoirs, remorque",
  },
  {
    b: "Base de véhicules pré-remplie",
    t: " : un modèle se sélectionne au lieu d’être saisi ; toutes les valeurs restent ajustables",
  },
  {
    b: "Voyage décrit en langage naturel",
    t: " : l’IA en extrait destination, durée, budget, préférences et contraintes, puis pose les questions manquantes",
  },
  { b: "Saisie manuelle", t: " toujours disponible en alternative" },
  {
    b: "Contraintes propres au voyage",
    t: " : budget et dates ponctuels, sans toucher au profil général",
  },
] as const;

export const incl2 = [
  {
    b: "Itinéraire complet",
    t: " : étapes quotidiennes, kilomètres, temps de conduite, pauses, hébergements et activités",
  },
  {
    b: "2 à 3 alternatives par portion",
    t: " : rapide, économique, panoramique ou confortable, chiffrées en distance, durée, carburant, péages et météo",
  },
  {
    b: "Chaque choix expliqué",
    t: " : avantages, coût, temps gagné ou perdu, impact sur la suite du voyage",
  },
  {
    b: "Itinéraire au gabarit",
    t: " : ponts bas, limitations de hauteur et de poids, routes interdites, rues étroites, parkings à barre",
  },
  {
    b: "Marge de temps invisible",
    t: " répartie sur le voyage, pour absorber pauses, repas et imprévus sans sacrifier d’activité",
  },
  {
    b: "Recalcul instantané",
    t: " après toute modification : horaires, kilomètres, budget, réservations, météo, jours suivants",
  },
  {
    b: "Réservations anticipées",
    t: " : délai conseillé, meilleure période tarifaire, indice de disponibilité sur 4 niveaux",
  },
  { b: "Export PDF", t: " de l’itinéraire" },
] as const;

export const incl3 = [
  {
    b: "Budget prévisionnel",
    t: " : carburant, péages, hébergements, restaurants, courses, activités, ferries",
  },
  {
    b: "Dépense saisie en photo",
    t: " : l’OCR lit la date, le commerçant, le montant, la devise et la catégorie",
  },
  {
    b: "Catégorie corrigeable",
    t: " avant validation ; budget, répartition et statistiques se mettent à jour seuls",
  },
  { b: "Prévu contre réel", t: " comparés en permanence" },
  {
    b: "Budget collaboratif",
    t: " : contribution et solde par participant, remboursements calculés en fin de voyage",
  },
] as const;

export const incl4 = [
  {
    b: "Checklist générée",
    t: " selon destination, saison, météo, véhicule, enfants, animaux et activités prévues",
  },
  { b: "Catégories", t: " : vêtements, nourriture, pharmacie, outils, pièces de rechange" },
  { b: "Pré-cochage", t: " de tout ce que le profil déclare déjà" },
  {
    b: "Documents par pays traversé",
    t: " : passeport, visa, permis international, carte grise, assurance, vignettes, équipements obligatoires",
  },
  {
    b: "Volet santé",
    t: " : vaccins, traitements préventifs et précautions, rappelés assez tôt pour agir",
  },
  { b: "Code de la route et législation camping", t: " du pays visité" },
] as const;

export const incl5 = [
  {
    b: "Carte des points utiles",
    t: " : campings, aires, spots sauvages, stations-service et GPL, bornes, points d’eau, vidanges, laveries, pharmacies, plages, randonnées, parkings",
  },
  { b: "Cartes hors ligne", t: " : itinéraire et points consultables sans réseau" },
  {
    b: "Point ajouté sur la carte",
    t: " : trajet, coût, étapes, budget et heure d’arrivée recalculés aussitôt",
  },
  { b: "Navigation au gabarit", t: " et pause conseillée toutes les deux heures" },
  {
    b: "Plan B automatique",
    t: " sur météo, trafic, route fermée, ferry ou hébergement complet : déviation ou étape équivalente proposée",
  },
  {
    b: "Cockpit personnalisable",
    t: " : 5 à 6 indicateurs au choix parmi voyage, budget, véhicule, réservations, conditions et IA",
  },
] as const;

export const incl6 = [
  {
    b: "Contrôle avant départ",
    t: " : huile, refroidissement, pneus, éclairage, batterie, courroies, eau, eaux usées, gaz, batteries cellule",
  },
  {
    b: "Rappels d’entretien au kilométrage",
    t: " : vidange, contrôle technique, consommables, avec alerte si un entretien est en retard",
  },
  {
    b: "Voyage partagé",
    t: " : rôles Organisateur, Copilote et Enfant, droits paramétrables, modifications validées par l’organisateur",
  },
  {
    b: "Localisation partagée en temps réel",
    t: " entre participants, activable et révocable à tout moment",
  },
  {
    b: "Mode Enfant",
    t: " : suivi du trajet façon écran de vol, programme du jour, carnet à quiz, défis et badges, en lecture seule",
  },
  {
    b: "Carnet de voyage automatique",
    t: " : trajet réellement parcouru, album, statistiques, budget final, export PDF et partage souvenir",
  },
] as const;

export const incl7 = [
  {
    b: "Moteur IA génératif",
    t: " : itinéraires, alternatives, checklist et explications, via une API de premier plan",
  },
  {
    b: "Cartographie professionnelle",
    t: " : distances, durées, péages et contraintes de gabarit",
  },
  { b: "Météo", t: " : prévisions à 7–10 jours par étape et alertes de sécurité" },
  {
    b: "Base d’hébergements",
    t: " : campings, aires, spots et hôtels agrégés par API ou partenariat",
  },
  {
    b: "API et base de données dédiées",
    t: " : architecture évolutive, sauvegardes, journalisation, conformité RGPD",
  },
  {
    b: "Cloud professionnel",
    t: " : scalabilité, haute disponibilité, monitoring, protection DDoS, sauvegardes quotidiennes",
  },
  {
    b: "Stripe",
    t: " : gratuit, abonnement mensuel ou annuel, paiement à l’unité par voyage, remboursements, conformité PCI",
  },
  {
    b: "Publication App Store et Google Play",
    t: " : builds, soumissions, gestion des refus jusqu’à validation",
  },
] as const;

export const incl8 = [
  {
    b: "Stratégie",
    t: " : marché camping-car et van, positionnement, acquisition des premiers voyageurs",
  },
  {
    b: "Créations",
    t: " : visuels Meta, Instagram et Facebook, contenus UGC, scripts, landing pages",
  },
  {
    b: "Campagnes",
    t: " : Meta Ads, Google Ads, Apple Search Ads, optimisation quotidienne, reporting et réunions de suivi",
  },
  {
    b: "Support 90 jours",
    t: " : corrections, ajustements mineurs, assistance prioritaire",
  },
  { b: "Documentation et formation", t: " technique et utilisateur" },
] as const;

/** Section 03 — répartition du forfait de 6 400 € par prestation. */
export const investment = [
  {
    strong: "Applications mobiles voyageur",
    text: " (iOS & Android)",
    amount: "1 700 €",
    alt: false,
  },
  {
    strong: "Moteur IA de planification",
    text: " : itinéraires, alternatives, explications, checklist",
    amount: "1 100 €",
    alt: true,
  },
  { text: "Application web (planificateur & carnet de voyage)", amount: "700 €", alt: false },
  {
    text: "Cartographie, itinéraires hors gabarit, mode hors ligne & partage de localisation",
    amount: "650 €",
    alt: true,
  },
  { text: "Modules budget (OCR), checklist & entretien du véhicule", amount: "600 €", alt: false },
  {
    text: "API, base de données (dont catalogue véhicules) & infrastructure cloud",
    amount: "550 €",
    alt: true,
  },
  { text: "Back-office d’administration", amount: "450 €", alt: false },
  {
    text: "Abonnements, paiement par voyage & déploiement sur les stores",
    amount: "250 €",
    alt: true,
  },
  { text: "Accompagnement marketing 90 jours", amount: "250 €", alt: false },
  { text: "Documentation, formation & support", amount: "150 €", alt: true },
] as const;

/** Section 03 — échéancier : 3 versements de 30 %, 50 % et 20 %, soit 6 400 €. */
export const payments = [
  {
    pct: "30 %",
    when: "À la signature",
    desc: "Déclenche le cadrage, la conception et le développement",
    amount: "1 920 €",
  },
  {
    pct: "50 %",
    when: "À la validation du planificateur",
    desc: "Fin de la phase 2 : moteur IA, itinéraires, budget et checklist livrés",
    amount: "3 200 €",
  },
  {
    pct: "20 %",
    when: "À la livraison",
    desc: "Publication sur l’App Store et Google Play, mise en ligne et formation",
    amount: "1 280 €",
  },
] as const;

/** Le devis est un forfait unique. Conservé pour compatibilité de type ;
 * non affiché dans la page. */
export const formules = [
  {
    key: "zentrip",
    name: "Forfait PROGIX",
    badge: "Tout compris",
    tagline:
      "Développement complet de ZenTrip (planificateur de road trip par IA et copilote en voyage), déploiement sur les stores et accompagnement marketing de 90 jours.",
    price: "6 400 €",
    priceUnit: "",
    priceNote: "6 400 € · réglé en 3 versements (30 % / 50 % / 20 %)",
    points: [
      { b: "Applications mobiles & web voyageur", t: " + back-office d’administration" },
      { b: "Planificateur IA, carte hors ligne, budget OCR", t: " & carnet de voyage" },
      { b: "Accompagnement marketing", t: " de 90 jours inclus" },
    ],
    result: "Livraison des applications publiées sur l’App Store et Google Play.",
  },
] as const;

/** Section 06 — delivery phases (90 jours + 90 jours de marketing). */
export const phases = [
  {
    tag: "PHASE 1 · J1–J15",
    title: "Analyse & architecture",
    desc: "Cadrage, conception UI/UX, architecture technique, API, base de données et sélection des services tiers",
  },
  {
    tag: "PHASE 2 · J16–J55",
    title: "Planificateur intelligent",
    desc: "Moteur IA, itinéraires et alternatives, profil véhicule, budget, checklist, hébergements et activités",
  },
  {
    tag: "PHASE 3 · J56–J80",
    title: "Copilote en voyage",
    desc: "Carte interactive, points d’intérêt, mode hors ligne, entretien véhicule, cockpit, partage et carnet de voyage",
  },
  {
    tag: "PHASE 4 · J81–J90",
    title: "Tests & déploiement",
    desc: "Back-office, tests qualité, publication App Store & Google Play, mise en ligne et formation",
  },
  {
    tag: "PHASE 5 · 90 JOURS",
    title: "Accompagnement marketing",
    desc: "Stratégie, création et gestion des campagnes, optimisation et reporting",
  },
] as const;

/** Header / footer navigation across the document set. The presentation page is
 * hidden for this project, so it is intentionally omitted from the nav. */
export const navLinks = [
  { key: "cahier", label: "Cahier des charges", href: "/cahier-des-charges" },
  { key: "calendrier", label: "Calendrier", href: "/calendrier" },
  { key: "devis", label: "Devis contractuel", href: "/devis" },
] as const;
