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
    "ZenTrip : application mobile et web qui prépare, optimise et accompagne un road trip de bout en bout. À partir d’une simple description en langage naturel, l’application génère l’itinéraire complet, les étapes jour par jour, les hébergements, le budget prévisionnel, la checklist personnalisée et plusieurs alternatives comparées — puis accompagne le voyageur sur la route avec une carte interactive hors ligne, le suivi du véhicule et le carnet de voyage. Applications iOS et Android, application web, portail d’administration, infrastructure cloud et 90 jours d’accompagnement marketing inclus.",
  badges: [
    { l: "Investissement", v: "800 €", u: " /mois × 8 mois" },
    { l: "Délai de développement", v: "90", u: " jours" },
    { l: "Accompagnement marketing", v: "90", u: " jours inclus" },
  ],
  meta: [
    { l: "Projet", v: "ZenTrip — planification de road trip par IA" },
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
    b: "Compte & profil voyageur",
    t: " : authentification sécurisée, langue, adultes, enfants et âges, animaux, centres d’intérêt, type de voyage, niveau sportif, mobilité réduite",
  },
  {
    b: "Profil véhicule enregistré une seule fois",
    t: " : type, longueur (porte-vélos inclus), largeur, hauteur (galerie incluse), PTAC, consommation, carburant, réservoirs eau et gaz, autonomie, remorque",
  },
  {
    b: "Base de véhicules pré-remplie",
    t: " : sélection d’un modèle existant (marque, gabarit, PTAC, réservoirs) pour éviter la saisie manuelle — chaque valeur reste ajustable",
  },
  {
    b: "Création d’un voyage en langage naturel",
    t: " : l’IA extrait la destination, la durée, le budget, les préférences et les contraintes, et pose les questions complémentaires manquantes",
  },
  {
    b: "Saisie manuelle possible",
    t: " pour les voyageurs qui préfèrent renseigner eux-mêmes leur projet",
  },
  {
    b: "Informations propres au voyage",
    t: " : budget, dates, contraintes et préférences ponctuelles, sans modifier le profil général",
  },
] as const;

export const incl2 = [
  {
    b: "Génération d’itinéraire complet",
    t: " : parcours, étapes quotidiennes, kilomètres, temps de conduite et pauses recommandées",
  },
  {
    b: "2 à 3 alternatives par portion principale",
    t: " : plus rapide, plus économique, plus panoramique, plus confortable — avec distance, durée, coût carburant et péages, météo prévue et remarque contextuelle",
  },
  {
    b: "Explication de chaque recommandation",
    t: " : avantages, inconvénients, coût, temps gagné ou perdu et impact sur le voyage",
  },
  {
    b: "Itinéraire adapté au gabarit du véhicule",
    t: " : ponts trop bas, limitations de hauteur et de poids, routes interdites, rues étroites, parkings avec barres de hauteur",
  },
  {
    b: "Gestion intelligente du temps",
    t: " : marge invisible répartie sur l’ensemble du voyage pour absorber pauses, repas, arrêts photo et imprévus sans supprimer d’activité prévue",
  },
  {
    b: "Recalcul automatique",
    t: " à chaque modification : horaires, kilomètres, budget, réservations, temps de conduite, météo et jours suivants",
  },
  {
    b: "Anticipation des réservations",
    t: " : nécessité, délai recommandé, période idéale pour le meilleur prix et indice de disponibilité (faible, moyen, élevé, critique)",
  },
  { b: "Export PDF", t: " de l’itinéraire complet" },
] as const;

export const incl3 = [
  {
    b: "Budget prévisionnel détaillé",
    t: " : carburant, péages, hébergements, restaurants, courses, activités, ferries et transports",
  },
  {
    b: "Saisie des dépenses par photo",
    t: " : reconnaissance de documents (OCR) et extraction automatique de la date, du commerçant, du montant, de la devise et de la catégorie",
  },
  {
    b: "Correction avant enregistrement",
    t: " et mise à jour automatique du budget total, de la répartition par catégorie et des statistiques",
  },
  { b: "Comparaison permanente", t: " entre budget prévu et budget réel" },
  {
    b: "Budget collaboratif",
    t: " : dépenses par participant, contribution de chacun, solde individuel et calcul automatique des remboursements en fin de voyage",
  },
] as const;

export const incl4 = [
  {
    b: "Checklist intelligente et personnalisée",
    t: " selon la destination, la saison, la météo, le véhicule, les enfants, les animaux et les activités prévues (sport, randonnée, plage, neige)",
  },
  {
    b: "Catégories structurées",
    t: " : vêtements, nourriture, pharmacie, outils, pièces de rechange",
  },
  {
    b: "Pré-cochage automatique",
    t: " des éléments déjà déclarés dans le profil utilisateur",
  },
  {
    b: "Documents administratifs par pays traversé",
    t: " : passeport, carte d’identité, visa, permis international, carte grise, assurance, vignettes environnementales, équipements obligatoires",
  },
  {
    b: "Informations sanitaires",
    t: " : vaccins obligatoires et recommandés, traitements préventifs et précautions spécifiques — avec rappels suffisamment en avance",
  },
  {
    b: "Rappel du code de la route et de la législation camping",
    t: " pour chaque pays visité",
  },
] as const;

export const incl5 = [
  {
    b: "Carte interactive avec points d’intérêt",
    t: " : campings, aires de camping-car, spots sauvages, hôtels, restaurants, stations-service, bornes électriques, stations GPL, points d’eau, vidanges, laveries, supermarchés, pharmacies, plages, randonnées, points de vue, parkings et monuments",
  },
  {
    b: "Téléchargement des cartes hors ligne",
    t: " : consultation de l’itinéraire et des points d’intérêt sans connexion",
  },
  {
    b: "Ajout ou suppression d’un point directement sur la carte",
    t: " avec recalcul instantané de l’itinéraire, du temps de trajet, du coût, des étapes, du budget et de l’heure d’arrivée",
  },
  {
    b: "Navigation adaptée au véhicule",
    t: " et recommandation de pauses toutes les deux heures",
  },
  {
    b: "Surveillance des conditions & plan B automatique",
    t: " : météo, trafic, routes fermées, incendies, inondations, ferries et disponibilité des hébergements — l’application propose une déviation, un hébergement équivalent ou une nouvelle étape",
  },
  {
    b: "Cockpit intelligent personnalisable",
    t: " : 5 à 6 indicateurs choisis parmi voyage, budget, véhicule, réservations, conditions et recommandations IA",
  },
] as const;

export const incl6 = [
  {
    b: "Entretien du véhicule",
    t: " : checklist de contrôle avant départ (huile, refroidissement, lave-glace, pneus, éclairage, batterie, courroies, eau propre, eaux usées, gaz, batteries auxiliaires)",
  },
  {
    b: "Rappels d’entretien pendant le voyage",
    t: " : alertes kilométriques, vidange, contrôle technique, entretien constructeur, remplacement des consommables — et alertes proactives si un entretien est en retard",
  },
  {
    b: "Partage collaboratif du voyage",
    t: " : rôles Organisateur, Copilote et Enfant (Explorateur), autorisations paramétrables et validation des modifications par l’organisateur",
  },
  {
    b: "Partage de localisation en temps réel",
    t: " : position de chaque participant sur la carte du voyage, activable et désactivable à tout moment, sur consentement explicite",
  },
  {
    b: "Mode Enfant (Explorateur)",
    t: " : suivi du trajet en temps réel façon écran de vol, programme du jour, Carnet d’Explorateur avec anecdotes, quiz, défis d’observation et badges — entièrement consultatif",
  },
  {
    b: "Carnet de voyage généré automatiquement",
    t: " : enregistrement du trajet réellement parcouru, album, carte, statistiques, budget final, kilomètres, export PDF et partage sur les réseaux sociaux (volet souvenir uniquement)",
  },
] as const;

export const incl7 = [
  {
    b: "Moteur IA génératif",
    t: " : génération d’itinéraires, alternatives, personnalisation de la checklist et explications, via une API d’intelligence artificielle de premier plan",
  },
  {
    b: "Cartographie & calcul d’itinéraires",
    t: " : distances, durées, péages, alternatives et contraintes de gabarit, via un service de cartographie professionnel",
  },
  {
    b: "Données météo",
    t: " : prévisions à 7–10 jours sur chaque étape et alertes de sécurité",
  },
  {
    b: "Base d’hébergements",
    t: " : agrégation de campings, aires de service, spots et hôtels via API tierces ou partenariats",
  },
  {
    b: "API sécurisée & base de données dédiée",
    t: " : architecture évolutive, sauvegardes automatiques, journalisation complète, conformité RGPD",
  },
  {
    b: "Hébergement cloud professionnel",
    t: " : scalabilité automatique, haute disponibilité, monitoring, protection DDoS, sauvegardes quotidiennes",
  },
  {
    b: "Abonnements & paiements Stripe",
    t: " : version gratuite, abonnement mensuel ou annuel, paiement à l’unité par voyage, paiements récurrents, gestion des remboursements, conformité PCI",
  },
  {
    b: "Publication App Store & Google Play",
    t: " : builds, configuration des stores, soumissions Apple et Google, gestion des refus éventuels, accompagnement jusqu’à validation",
  },
] as const;

export const incl8 = [
  {
    b: "Stratégie marketing",
    t: " : étude du marché camping-car, van et fourgon aménagé, positionnement et acquisition des premiers voyageurs",
  },
  {
    b: "Création publicitaire",
    t: " : créatifs Meta, Instagram et Facebook, contenus UGC, scripts publicitaires et landing pages",
  },
  {
    b: "Gestion publicitaire",
    t: " : Meta Ads, Google Ads, Apple Search Ads, optimisation quotidienne, reporting continu et réunions de suivi",
  },
  {
    b: "Support post-livraison de 90 jours",
    t: " : corrections de bugs, ajustements mineurs, assistance technique et support prioritaire",
  },
  { b: "Documentation technique & utilisateur", t: " + formation à l’utilisation" },
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

/** Section 03 — échéancier : 8 versements mensuels de 800 €, soit 6 400 €. */
export const payments = [
  {
    pct: "MENSUEL",
    when: "Mois 1 à 8",
    desc: "800 € par mois, sans variation",
    amount: "800 €",
  },
  {
    pct: "DURÉE",
    when: "Sur 8 mois",
    desc: "Du démarrage au-delà du lancement",
    amount: "8 mois",
  },
  {
    pct: "TOTAL",
    when: "6 400 € · sur 8 mois",
    desc: "Forfait global",
    amount: "6 400 €",
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
      "Développement complet de ZenTrip — planificateur de road trip par IA et copilote en voyage —, déploiement sur les stores et accompagnement marketing de 90 jours.",
    price: "6 400 €",
    priceUnit: "",
    priceNote: "6 400 € · réglé sur 8 mois",
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
