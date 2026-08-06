import type { CSSProperties, ReactNode } from "react";
import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments (lifted verbatim from the source).   */
/* ------------------------------------------------------------------ */

const SECTION_DOTS: CSSProperties = {
  width: "100%",
};

const CONTAINER: CSSProperties = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
};

const CARD: CSSProperties = {
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "var(--shadow)",
};

const CARD_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "15px",
  color: "#fff",
  fontWeight: 600,
  margin: "0 0 7px",
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const CARD_TEXT: CSSProperties = {
  fontSize: "14px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.6,
};

const ROUND_BADGE: CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "var(--font-disp)",
};

const GRID_AUTO: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
  gap: "16px",
};

const H3_DIAMOND: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "19px",
  color: "#fff",
  fontWeight: 600,
  margin: "34px 0 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const INFOBOX: CSSProperties = {
  background: "var(--tint-2)",
  border: "1px solid rgba(56,182,255,0.22)",
  borderRadius: "14px",
  padding: "18px 22px",
  margin: "16px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const INFOBOX_ICON: CSSProperties = {
  flexShrink: 0,
  width: "30px",
  height: "30px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: "14px",
  fontFamily: "var(--font-disp)",
  background: "var(--cyan)",
};

const INFOBOX_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "14px",
  margin: "0 0 4px",
  color: "#fff",
  fontWeight: 600,
};

const INFOBOX_TEXT: CSSProperties = {
  fontSize: "13.6px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.55,
};

const STRONG_INK: CSSProperties = { color: "var(--ink)", fontWeight: 600 };

const TH: CSSProperties = {
  background: "var(--navy)",
  color: "#fff",
  textAlign: "left",
  padding: "11px 15px",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
};

const TAG_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "10.5px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
  padding: "4px 11px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

const STEP_CARD: CSSProperties = {
  // 280px basis lays the six journey steps out as two full rows of three.
  flex: "1 1 280px",
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "16px 14px",
  boxShadow: "var(--shadow)",
};

const STEP_EYEBROW: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 700,
  fontSize: "11px",
  color: "var(--cyan-ink)",
  letterSpacing: ".5px",
};

const STEP_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "14px",
  color: "#fff",
  margin: "6px 0 4px",
};

const STEP_DESC: CSSProperties = {
  fontSize: "12.5px",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const STEP_RULE: CSSProperties = {
  height: "6px",
  borderRadius: "6px",
  background: "linear-gradient(90deg,var(--cyan),var(--navy))",
  margin: "14px 0 0",
};

const ARCH_NODE: CSSProperties = {
  background: "var(--card)",
  border: "1.5px solid var(--line)",
  borderRadius: "11px",
  padding: "12px 14px",
  minWidth: "130px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
};

const ARCH_NODE_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "12.5px",
  color: "#fff",
};

const ARCH_NODE_SUB: CSSProperties = {
  fontSize: "11px",
  color: "var(--muted)",
  marginTop: "2px",
};

const ARCH_COL_LABEL: CSSProperties = {
  textAlign: "center",
  fontFamily: "var(--font-disp)",
  fontSize: "10px",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "4px",
};

const ARCH_ARROW: CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--cyan)",
  fontSize: "18px",
  fontWeight: 700,
};

const A_GRAD = "linear-gradient(150deg,var(--cyan-deep),var(--cyan))";
const N_GRAD = "linear-gradient(150deg,var(--navy),var(--navy-700))";

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function Strong({ children }: { children: ReactNode }) {
  return <strong style={STRONG_INK}>{children}</strong>;
}

/** Subsection heading with the cyan diamond marker, with custom top margin. */
function DiamondHeading({
  children,
  marginTop = "34px",
}: {
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3 style={{ ...H3_DIAMOND, margin: `${marginTop} 0 12px` }}>
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={CARD}>
      <h4 style={CARD_TITLE}>
        <span style={{ ...ROUND_BADGE, background: iconBg }} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <p style={CARD_TEXT}>{children}</p>
    </div>
  );
}

function InfoCallout({
  iconBg = "var(--cyan)",
  icon = "i",
  title,
  titleColor = "#fff",
  borderColor = "rgba(56,182,255,0.22)",
  background = "var(--tint-2)",
  children,
}: {
  iconBg?: string;
  icon?: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
  background?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...INFOBOX, background, border: `1px solid ${borderColor}` }}>
      <div style={{ ...INFOBOX_ICON, background: iconBg }} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 style={{ ...INFOBOX_TITLE, color: titleColor }}>{title}</h4>
        <p style={INFOBOX_TEXT}>{children}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data lifted from the renderVals() island.                           */
/* ------------------------------------------------------------------ */

const meta = [
  { l: "Projet", v: "ZenTrip — planification de road trip par IA" },
  { l: "Client", v: "____________" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "CDC-PROGIX-2026 · v1.0" },
] as const;

const toc = [
  { n: "01", t: "Contexte & vision" },
  { n: "02", t: "Objectifs" },
  { n: "03", t: "Public cible" },
  { n: "04", t: "Fonctionnalités" },
  { n: "05", t: "Parcours utilisateur type" },
  { n: "06", t: "Approche technique" },
  { n: "07", t: "Livrables & accompagnement" },
] as const;

type Tag = { label: string; bg: string; fg: string; bd: string };
type Feat = { b: string; t: string };
type Module = {
  n: string;
  iconBg: string;
  title: string;
  hasBadge: boolean;
  badge: string;
  desc: string;
  feats: Feat[];
  tags: Tag[];
};

const ok: Tag = { label: "Inclus V1", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.08)",
  fg: "#cdd9ec",
  bd: "none",
});
const gh = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.05)",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const F = (b: string, t: string): Feat => ({ b, t });

const modules: Module[] = [
  {
    n: "01",
    iconBg: N_GRAD,
    title: "Planificateur intelligent",
    hasBadge: true,
    badge: "Cœur de l’app",
    desc: "Le moteur de ZenTrip : le voyageur décrit son projet en quelques phrases, l’intelligence artificielle construit le voyage complet et explique chacune de ses recommandations.",
    feats: [
      F(
        "Création d’un voyage en langage naturel",
        " : l’IA extrait la destination, la durée, le budget, les préférences et les contraintes, et pose les questions complémentaires manquantes.",
      ),
      F(
        "Itinéraire complet généré automatiquement",
        " : parcours, étapes quotidiennes, kilomètres, temps de conduite, pauses recommandées, hébergements et activités adaptées au profil.",
      ),
      F(
        "2 à 3 alternatives par portion principale",
        " — plus rapide, plus économique, plus panoramique, plus confortable — avec distance, durée, coût carburant et péages, météo prévue et remarque contextuelle.",
      ),
      F(
        "Explication systématique",
        " : avantages, inconvénients, coût, temps gagné ou perdu et impact sur la suite du voyage. La décision finale appartient toujours au voyageur.",
      ),
      F(
        "Gestion intelligente du temps",
        " : marge invisible répartie sur l’ensemble du voyage pour absorber pauses, repas, arrêts photo et imprévus, sans supprimer d’activité prévue.",
      ),
      F(
        "Recalcul automatique",
        " à chaque modification : horaires, kilomètres, budget, réservations, temps de conduite, météo et jours suivants.",
      ),
      F("Export PDF", " de l’itinéraire complet."),
    ],
    tags: [ok, cy("Intelligence artificielle")],
  },
  {
    n: "02",
    iconBg: N_GRAD,
    title: "Profil véhicule & itinéraire hors gabarit",
    hasBadge: true,
    badge: "Différenciant",
    desc: "Le profil du véhicule est enregistré une seule fois et conditionne chaque itinéraire proposé — la fonction que les applications de navigation grand public ne couvrent pas.",
    feats: [
      F(
        "Caractéristiques du véhicule",
        " : type, longueur (porte-vélos inclus), largeur, hauteur (galerie incluse), PTAC, consommation, carburant, capacité des réservoirs, autonomie, remorque.",
      ),
      F(
        "Évitement automatique des contraintes",
        " : ponts trop bas, limitations de hauteur et de poids, routes interdites aux poids lourds, rues trop étroites, parkings avec barres de hauteur.",
      ),
      F(
        "Calcul d’itinéraires compatibles",
        " avec le gabarit, intégré au moteur de planification et à la navigation.",
      ),
      F("", "Profil modifiable à tout moment et réutilisé automatiquement d’un voyage à l’autre."),
    ],
    tags: [ok, gh("Sécurité")],
  },
  {
    n: "03",
    iconBg: A_GRAD,
    title: "Budget intelligent & dépenses",
    hasBadge: true,
    badge: "Fonction clé",
    desc: "Un budget prévisionnel détaillé, puis un suivi réel alimenté par simple photo des tickets de caisse.",
    feats: [
      F(
        "Budget prévisionnel",
        " intégrant carburant, péages, hébergements, restaurants, courses, activités, ferries et transports.",
      ),
      F(
        "Saisie par photo (OCR + IA)",
        " : extraction automatique de la date, du commerçant, du montant, de la devise et de la catégorie de dépense.",
      ),
      F(
        "Correction avant enregistrement",
        " puis mise à jour du budget total, de la répartition par catégorie et des statistiques du voyage.",
      ),
      F("Comparaison permanente", " entre budget prévu et budget réel."),
      F(
        "Budget collaboratif",
        " : dépenses par participant, contribution de chacun, solde individuel et calcul automatique des remboursements en fin de voyage.",
      ),
    ],
    tags: [ok, cy("OCR")],
  },
  {
    n: "04",
    iconBg: N_GRAD,
    title: "Checklist, formalités & santé",
    hasBadge: true,
    badge: "Fonction clé",
    desc: "Une checklist construite automatiquement à partir du profil, du véhicule, de la destination et de la saison — pour ne rien oublier avant de partir.",
    feats: [
      F(
        "Génération automatique",
        " selon la destination, la saison, la météo, le véhicule, les enfants, les animaux et les activités prévues (sport, randonnée, plage, neige).",
      ),
      F(
        "Catégories structurées",
        " : vêtements, nourriture, pharmacie, outils, pièces de rechange — avec pré-cochage des éléments déjà déclarés dans le profil.",
      ),
      F(
        "Documents administratifs par pays traversé",
        " : passeport, carte d’identité, visa, permis international, carte grise, assurance, vignettes environnementales, équipements obligatoires.",
      ),
      F(
        "Informations sanitaires",
        " : vaccins obligatoires et recommandés, traitements préventifs, précautions spécifiques — avec rappels suffisamment en avance.",
      ),
      F(
        "Ajouts contextuels",
        " (ex. chaînes neige pour un trajet en montagne en hiver) et rappel du code de la route et de la législation camping du pays visité.",
      ),
    ],
    tags: [ok, nv("Formalités")],
  },
  {
    n: "05",
    iconBg: A_GRAD,
    title: "Copilote en voyage & carte hors ligne",
    hasBadge: true,
    badge: "Phase 2",
    desc: "Une fois le voyage créé, ZenTrip devient une carte interactive qui accompagne le voyageur sur la route, même sans réseau.",
    feats: [
      F(
        "Points d’intérêt autour de l’itinéraire",
        " : campings, aires de camping-car, spots sauvages, hôtels, restaurants, stations-service, bornes électriques, stations GPL, points d’eau, vidanges, laveries, supermarchés, pharmacies, plages, randonnées, points de vue, parkings, monuments.",
      ),
      F(
        "Mode hors ligne",
        " : téléchargement des cartes et consultation des points d’intérêt sans connexion — les zones blanches sont fréquentes en road trip.",
      ),
      F(
        "Ajout ou suppression d’un point sur la carte",
        " avec recalcul instantané de l’itinéraire, du temps de trajet, du coût, des étapes, du budget et de l’heure d’arrivée.",
      ),
      F(
        "Surveillance & plan B automatique",
        " : météo, trafic, routes fermées, incendies, inondations, ferries et disponibilité des hébergements — l’application propose une déviation, un hébergement équivalent ou une nouvelle étape.",
      ),
      F(
        "Cockpit intelligent personnalisable",
        " : 5 à 6 indicateurs choisis parmi voyage, budget, véhicule, réservations, conditions et recommandations IA.",
      ),
    ],
    tags: [ok, cy("Hors ligne")],
  },
  {
    n: "06",
    iconBg: N_GRAD,
    title: "Entretien du véhicule",
    hasBadge: false,
    badge: "",
    desc: "Le suivi mécanique et les niveaux, avant le départ comme pendant le voyage.",
    feats: [
      F(
        "Checklist de contrôle avant départ",
        " : huile, liquide de refroidissement, lave-glace, pression et état des pneus, éclairage, batterie, courroies, eau propre, eaux usées, gaz, batteries auxiliaires.",
      ),
      F(
        "Rappels personnalisés pendant le voyage",
        " selon le kilométrage ou les intervalles constructeur : vidange, contrôle technique, entretien, remplacement des consommables.",
      ),
      F(
        "Recommandation automatique du service utile",
        " : station-service, aire de vidange, point d’eau, recharge électrique, remplissage de gaz.",
      ),
      F("Alertes proactives", " avant un départ si un entretien est en retard."),
    ],
    tags: [ok, nv("Véhicule")],
  },
  {
    n: "07",
    iconBg: A_GRAD,
    title: "Partage collaboratif & carnet de voyage",
    hasBadge: false,
    badge: "",
    desc: "Le voyage se partage avec des rôles adaptés, et se conserve en fin de séjour sous forme de carnet exportable.",
    feats: [
      F(
        "Rôles & autorisations",
        " : Organisateur (propriétaire du voyage, contrôle final), Copilote (préparation et suivi selon les droits accordés), Enfant / Explorateur (consultation uniquement).",
      ),
      F(
        "Mode Enfant (Explorateur)",
        " : progression du trajet en temps réel façon écran de suivi de vol, temps et kilomètres restants, programme de la journée.",
      ),
      F(
        "Carnet d’Explorateur",
        " : anecdotes sur les lieux traversés, informations historiques simplifiées, quiz adaptés à l’âge, défis d’observation et badges à débloquer.",
      ),
      F(
        "Carnet de voyage automatique",
        " : album, carte parcourue, statistiques, budget final, kilomètres parcourus — exportable en PDF.",
      ),
      F(
        "Partage",
        " : volet souvenir sur les réseaux sociaux, aspects techniques réservés à la communauté ZenTrip, et enregistrement du voyage comme modèle réutilisable.",
      ),
    ],
    tags: [ok, cy("Collaboratif")],
  },
  {
    n: "08",
    iconBg: N_GRAD,
    title: "Back-office, abonnements & infrastructure",
    hasBadge: false,
    badge: "",
    desc: "L’administration centralisée, la gestion des abonnements et l’infrastructure cloud qui fait tourner l’ensemble.",
    feats: [
      F(
        "Portail web d’administration",
        " : comptes, voyages, contenus, suivi de la consommation des API tierces et tableau de bord analytique.",
      ),
      F(
        "Abonnements & paiements Stripe",
        " : version gratuite (itinéraire actif limité), forfaits payants, paiements récurrents, remboursements, conformité PCI. La participation à un voyage partagé reste gratuite.",
      ),
      F(
        "API sécurisée & base de données dédiée",
        " : architecture évolutive, sauvegardes automatiques, journalisation complète, conformité RGPD.",
      ),
      F(
        "Hébergement cloud professionnel",
        " : scalabilité automatique, haute disponibilité, monitoring, protection DDoS, sauvegardes quotidiennes.",
      ),
      F("Multilingue dès la conception", " pour préparer l’expansion internationale."),
    ],
    tags: [ok, nv("Backend & API")],
  },
];

/* ------------------------------------------------------------------ */
/* The page                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full "Cahier des charges" document — header, hero cover, the table of
 * contents, the thirteen content sections, and the footer. A Server Component
 * composing the shared client leaves (header, FAB, scroll-reveal) at the edges.
 */
export function CahierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="cahier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Cahier des charges · Document de cadrage"
          title="ZenTrip — le copilote"
          titleLight="intelligent du road trip"
          subtitle="Application mobile et web qui prépare, optimise et accompagne un road trip grâce à l’intelligence artificielle : génération d’itinéraire en langage naturel, alternatives comparées et expliquées, itinéraire adapté au gabarit du véhicule, budget intelligent, checklist personnalisée, carte interactive hors ligne, suivi de l’entretien et carnet de voyage."
          badges={[]}
          meta={meta}
        />

        {/* SOMMAIRE */}
        <section data-dc-section style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}>
          <div style={CONTAINER}>
            <span
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--cyan-ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  background: "var(--cyan)",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Sommaire
            </span>
            <h2
              style={{
                fontFamily: "var(--font-disp)",
                fontSize: "clamp(23px,3vw,28px)",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "-.01em",
                margin: "12px 0 0",
              }}
            >
              Ce que couvre ce document
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "15.5px",
                color: "var(--slate)",
                maxWidth: "66ch",
                lineHeight: 1.62,
              }}
            >
              Ce cahier des charges définit le périmètre fonctionnel et technique de ZenTrip,
              l’application de planification de road trip par intelligence artificielle, ainsi que
              les livrables attendus et la démarche de réalisation. Il sert de base contractuelle au
              devis associé.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--line)" }}>
              {toc.map((row) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "13px 2px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      fontSize: "13px",
                      width: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {row.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 500,
                      color: "#fff",
                      fontSize: "15px",
                    }}
                  >
                    {row.t}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dotted var(--line)",
                      transform: "translateY(-4px)",
                      minWidth: "20px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      color: "var(--muted)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — CONTEXTE */}
        <section
          id="s1"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="01 — CONTEXTE"
              title="Contexte & vision du projet"
              lead="Préparer un road trip impose aujourd’hui de jongler entre une dizaine d’applications qui ne communiquent pas entre elles : une pour la navigation, une pour les campings et les spots de bivouac, une pour les ravitaillements et les vidanges, une pour la météo, une pour le budget, une pour la checklist, une pour les activités, une pour les souvenirs. Les familles manquent d’outils adaptés aux enfants, les propriétaires de camping-cars suivent leurs niveaux à part, et les itinéraires compatibles avec un véhicule hors gabarit sont rarement comparés clairement avant le départ."
            />
            <p
              style={{
                fontSize: "15.5px",
                color: "var(--ink)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              ZenTrip est une{" "}
              <Strong>application mobile et web de planification de road trip</Strong> qui regroupe
              toutes ces fonctions dans une seule interface. À partir d’une simple description en
              langage naturel — « Je pars 12 jours en Écosse avec deux enfants, je veux voir les
              plus beaux paysages, éviter les péages et dépenser moins de 2 500 € » — l’intelligence
              artificielle génère l’<Strong>itinéraire complet</Strong>, les{" "}
              <Strong>étapes jour par jour</Strong>, les <Strong>hébergements</Strong>, le{" "}
              <Strong>budget prévisionnel</Strong>, la <Strong>checklist personnalisée</Strong> et
              plusieurs <Strong>alternatives comparées</Strong>.
            </p>
            <DiamondHeading>Positionnement</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              ZenTrip ne vend pas un itinéraire : elle aide le voyageur à{" "}
              <Strong>prendre les meilleures décisions</Strong> avant, pendant et après son voyage.
              L’intelligence artificielle{" "}
              <Strong>recommande, explique et propose des alternatives</Strong>, mais n’impose
              jamais — la décision finale appartient toujours au voyageur. Trois éléments
              distinguent le produit du marché existant : un{" "}
              <Strong>itinéraire réellement adapté au gabarit du véhicule</Strong> (hauteur, poids,
              largeur, routes interdites), un <Strong>mode famille</Strong> avec pauses, aires de
              jeux et activités selon l’âge des enfants, et le{" "}
              <Strong>suivi complet du véhicule de loisirs</Strong> (eau, gaz, batteries,
              entretien). L’application s’adresse d’abord aux propriétaires de{" "}
              <Strong>camping-cars, vans et fourgons aménagés</Strong>, avant de s’étendre à tous
              les road trippers.
            </p>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "-22px",
                  fontSize: "120px",
                  color: "rgba(56,182,255,.10)",
                  fontFamily: "var(--font-disp)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                —
              </span>
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Une seule application
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                Dix applications remplacées par une seule, du premier repérage jusqu’au retour
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Navigation, campings et spots, ravitaillements, météo, budget, checklist, activités
                et souvenirs sont réunis dans une seule interface, avec l’intelligence artificielle
                au cœur de l’expérience et un accompagnement en temps réel pendant tout le trajet.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    3
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      supports livrés
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    iOS, Android et application web
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    90
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      jours
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    de développement, jusqu’à la mise en ligne
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    90
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      jours
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    d’accompagnement marketing inclus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — OBJECTIFS */}
        <section
          id="s2"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="02 — OBJECTIFS" title="Objectifs" />
            <div style={GRID_AUTO}>
              <FeatureCard
                icon="1"
                iconBg="var(--cyan)"
                title="Préparer un voyage en quelques minutes"
              >
                Permettre au voyageur de décrire son projet en langage naturel et d’obtenir
                immédiatement un itinéraire complet, un budget, une checklist et des alternatives
                comparées.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Rouler en toute sécurité">
                Calculer des itinéraires réellement compatibles avec le gabarit du véhicule —
                hauteur, poids, largeur, routes interdites — et tenir compte de la météo et des
                risques de circulation.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Accompagner pendant le trajet">
                Offrir une carte interactive consultable hors connexion, des points d’intérêt utiles
                au voyage, un plan B automatique en cas d’imprévu et le suivi de l’entretien du
                véhicule.
              </FeatureCard>
              <FeatureCard
                icon="4"
                iconBg="var(--navy)"
                title="Maîtriser le budget & garder la mémoire"
              >
                Suivre les dépenses réelles par simple photo d’un ticket, comparer prévu et réel,
                puis générer automatiquement le carnet de voyage en fin de séjour.
              </FeatureCard>
            </div>
            <InfoCallout title="Objectif de lancement">
              Mettre en ligne les applications <Strong>iOS, Android et web</Strong> ainsi que le
              back-office en <Strong>90 jours</Strong>, puis lancer commercialement ZenTrip avec{" "}
              <Strong>90 jours d’accompagnement marketing</Strong> pour acquérir les premiers
              voyageurs au sein de la communauté camping-car, van et fourgon aménagé.
            </InfoCallout>
          </div>
        </section>

        {/* 03 — UTILISATEURS */}
        <section
          id="s3"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="03 — PUBLIC"
              title="Public cible"
              lead="La première version s’adresse aux propriétaires de camping-cars, vans et fourgons aménagés voyageant en France et en Europe. L’utilisateur idéal n’est pas défini par son âge ou son véhicule, mais par son besoin : gagner du temps dans la préparation et voyager sereinement avec un outil unique."
            />
            <UserCard
              letter="A"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="La famille nomade — persona principal"
              desc="Couple de 30 à 45 ans avec deux ou trois enfants, propriétaire d’un van, d’un fourgon ou d’un camping-car, qui voyage plusieurs semaines par an et prépare ses voyages des mois à l’avance."
              rows={[
                {
                  b: "Attentes :",
                  t: " profiter du voyage plutôt que passer des heures à l’organiser, respecter son budget, trouver des activités adaptées aux enfants et voyager en sécurité.",
                },
                {
                  b: "Frustrations :",
                  t: " trop d’applications différentes, difficulté à choisir entre plusieurs itinéraires, peur d’oublier un document, incertitude sur les routes accessibles au véhicule.",
                },
                { b: "Support :", t: " applications mobiles iOS et Android + application web." },
              ]}
              tags={[cy("Mode famille"), gh("Checklist")]}
            />
            <UserCard
              letter="B"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="Le couple aventurier ou le groupe d’amis"
              desc="20 à 40 ans, voyage en van ou en camping-car, cherche des paysages et des expériences originales, reste flexible sur son itinéraire."
              rows={[
                {
                  b: "Attentes :",
                  t: " découvrir les plus beaux endroits, dormir dans des lieux uniques, limiter les imprévus et optimiser le temps de voyage.",
                },
                {
                  b: "Frustrations :",
                  t: " trop d’informations à comparer, difficulté à choisir les meilleurs spots, temps perdu en préparation.",
                },
                { b: "Support :", t: " applications mobiles + budget collaboratif partagé." },
              ]}
              tags={[nv("Alternatives"), cy("Budget partagé")]}
            />
            <UserCard
              letter="C"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="Le retraité voyageur"
              desc="Plus de 60 ans, camping-car intégral ou profilé, voyages de plusieurs semaines ou plusieurs mois."
              rows={[
                {
                  b: "Attentes :",
                  t: " voyager sereinement, éviter les routes difficiles, préparer correctement le véhicule et trouver facilement les services indispensables.",
                },
                {
                  b: "Frustrations :",
                  t: " outils trop complexes, difficulté à centraliser les informations, stress lié aux imprévus.",
                },
                { b: "Support :", t: " interface simplifiée + rappels d’entretien du véhicule." },
              ]}
              tags={[nv("Hors gabarit"), cy("Entretien")]}
            />
            <UserCard
              letter="D"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="L’administrateur ZenTrip"
              desc="Gestionnaire qui supervise l’activité, pilote les abonnements et surveille la consommation des services tiers."
              rows={[
                {
                  b: "Attentes :",
                  t: " gérer les comptes et les voyages, suivre les abonnements et les revenus, analyser l’usage et maîtriser les coûts d’API.",
                },
                { b: "Support :", t: " portail web d’administration." },
              ]}
              tags={[nv("Supervision"), cy("Statistiques")]}
            />
          </div>
        </section>

        {/* 05 — PÉRIMÈTRE FONCTIONNEL */}
        <section
          id="s5"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="04 — FONCTIONNALITÉS"
              title="Fonctionnalités"
              lead="ZenTrip s’articule autour de huit modules couvrant tout le cycle du voyage : de la première idée à la génération de l’itinéraire, puis de l’accompagnement sur la route jusqu’au carnet de souvenirs. L’ensemble ci-dessous constitue le périmètre de la première version — les phases 1 et 2 de la stratégie de déploiement."
            />
            {modules.map((m) => (
              <div
                key={m.n}
                style={{
                  background: "var(--card-grad)",
                  border: "1px solid var(--card-bd)",
                  borderRadius: "14px",
                  margin: "16px 0",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "20px 22px 14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-disp)",
                      fontSize: "15px",
                      boxShadow: "0 6px 14px rgba(12,35,64,.22)",
                      background: m.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    {m.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 600,
                        margin: "2px 0 3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {m.title}
                      {m.hasBadge ? (
                        <span
                          style={{
                            ...TAG_BASE,
                            background: "var(--tint)",
                            color: "var(--cyan-ink)",
                          }}
                        >
                          {m.badge}
                        </span>
                      ) : null}
                    </h4>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.55,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
                  {m.feats.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "6px 0",
                        fontSize: "13.6px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan-ink)",
                          flexShrink: 0,
                          fontWeight: 700,
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>
                        {f.b ? <Strong>{f.b}</Strong> : null}
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "0 22px 18px clamp(22px,4vw,76px)",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        ...TAG_BASE,
                        background: t.bg,
                        color: t.fg,
                        border: t.bd,
                      }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — PARCOURS */}
        <section
          id="s6"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="05 — PARCOURS" title="Parcours utilisateur type" />
            <JourneyHeading letter="▸">Le parcours, étape par étape</JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Créer son profil",
                  d: "Le voyageur installe ZenTrip, crée son compte puis renseigne une seule fois son profil (adultes, enfants et âges, animaux, centres d’intérêt) et son profil véhicule (dimensions, PTAC, consommation, réservoirs).",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Décrire son projet de voyage",
                  d: "Il écrit librement : « Je pars 12 jours en Norvège avec mes trois enfants, je souhaite éviter les péages et limiter mon budget à 3 500 € ». ZenTrip complète avec les dates et les contraintes propres au voyage.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Comparer et valider",
                  d: "L’IA génère l’itinéraire, les étapes, le budget, les hébergements, les activités et la checklist, avec des alternatives expliquées. Le voyageur ajuste chaque journée ; tout est recalculé instantanément.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Préparer le départ",
                  d: "Quelques jours avant, la checklist se complète : documents administratifs, santé, contrôle du véhicule. Les réservations prioritaires sont signalées à l’avance selon leur indice de disponibilité.",
                },
                {
                  n: "ÉTAPE 5",
                  t: "Rouler accompagné",
                  d: "Sur la route, ZenTrip passe en mode navigation : carte hors ligne, points d’intérêt, cockpit personnalisé, plan B automatique en cas d’imprévu et dépenses enregistrées par photo d’un ticket.",
                },
                {
                  n: "ÉTAPE 6",
                  t: "Conserver le souvenir",
                  d: "En fin de séjour, le carnet de voyage est généré automatiquement — carte parcourue, statistiques, budget final, photos — exportable en PDF et réutilisable comme modèle pour le prochain road trip.",
                },
              ]}
            />
          </div>
        </section>

        {/* 06 — APPROCHE TECHNIQUE */}
        <section
          id="s7"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="06 — APPROCHE TECHNIQUE"
              title="Approche technique"
              lead="Progix sélectionne les technologies les plus adaptées au besoin, en privilégiant la performance, la rapidité de développement et la maintenabilité. Le choix final de la stack relève de l’expertise de Progix."
            />
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "520px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Composant</th>
                    <th style={TH}>Approche</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Applications mobiles & web</Strong>
                    </td>
                    <td style={TD_NB}>
                      Application voyageur iOS + Android et application web, avec disponibilité
                      hors-ligne partielle (itinéraires et checklists consultables sans connexion)
                      et compatibilité smartphone, tablette et navigateur.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Moteur IA génératif</Strong>
                    </td>
                    <td style={TD_NB_ALT}>
                      Génération d’itinéraires, alternatives de trajet, personnalisation de la
                      checklist et explications, via une API d’intelligence artificielle tierce
                      (type Claude ou OpenAI) plutôt qu’un modèle propriétaire, afin de limiter
                      l’investissement R&D initial.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Cartographie & itinéraires</Strong>
                    </td>
                    <td style={TD_NB}>
                      Service de cartographie professionnel pour le calcul des distances, des
                      durées, des péages et des alternatives — avec prise en charge des contraintes
                      de gabarit (hauteur, poids, largeur, routes interdites).
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Données météo & hébergements</Strong>
                    </td>
                    <td style={TD_NB_ALT}>
                      Prévisions à 7–10 jours et alertes de sécurité sur chaque étape ; agrégation
                      de campings, aires de service, spots et hôtels via API tierces ou
                      partenariats.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Backend, API & base de données</Strong>
                    </td>
                    <td style={TD_NB}>
                      API sécurisée et base dédiée : comptes, profils voyageur et véhicule, voyages
                      sauvegardés, étapes, budgets, checklists, dépenses et historique — sauvegardes
                      automatiques et conformité RGPD.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Abonnements & paiement</Strong>
                    </td>
                    <td style={TD_NB_ALT}>
                      Intégration Stripe : version gratuite, forfaits payants, paiements récurrents,
                      remboursements, conformité PCI.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      <Strong>Infrastructure cloud</Strong>
                    </td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      Hébergement cloud professionnel : scalabilité automatique, haute
                      disponibilité, monitoring, protection DDoS, sauvegardes quotidiennes, stockage
                      des photos et documents du carnet de voyage.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InfoCallout title="Périmètre de la première version">
              Le présent cahier des charges couvre les <Strong>phases 1 et 2</Strong> de la
              stratégie de déploiement de ZenTrip : le{" "}
              <Strong>planificateur de road trip intelligent</Strong> et le{" "}
              <Strong>copilote pendant le voyage</Strong>. La <Strong>communauté ZenTrip</Strong>{" "}
              (spots partagés, avis, photos, signalements — phase 3) ainsi que l’
              <Strong>expansion internationale</Strong> et les fonctionnalités avancées comme le
              mode « faible exposition aux réseaux » (phase 4) sont documentées comme évolutions
              ultérieures et ne font pas partie du présent périmètre. La performance visée est la
              génération d’un itinéraire complet en <Strong>moins de 30 secondes</Strong>. Le choix
              final de la stack relève de l’expertise de Progix.
            </InfoCallout>
          </div>
        </section>

        {/* 09 — LIVRABLES */}
        <section
          id="s9"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="07 — LIVRABLES" title="Livrables & accompagnement" />
            <div
              style={{
                background: "var(--card-grad)",
                border: "1px solid var(--card-bd)",
                borderRadius: "14px",
                padding: "8px 24px",
                boxShadow: "var(--shadow)",
                margin: "14px 0",
              }}
            >
              {[
                {
                  n: "1",
                  t: "Application voyageur iOS & Android",
                  d: "Applications publiées sur l’App Store et le Google Play Store, avec gestion des refus éventuels jusqu’à validation.",
                },
                {
                  n: "2",
                  t: "Application web",
                  d: "Planificateur, gestion des voyages et carnet de voyage accessibles depuis un navigateur, en complément du mobile.",
                },
                {
                  n: "3",
                  t: "Moteur IA & intégrations tierces",
                  d: "Génération d’itinéraires et d’alternatives, cartographie hors gabarit, météo et bases d’hébergements — intégrés, configurés et documentés.",
                },
                {
                  n: "4",
                  t: "Portail web d’administration",
                  d: "Back-office : comptes, voyages, abonnements, suivi de la consommation des API tierces et tableau de bord analytique.",
                },
                {
                  n: "5",
                  t: "Backend & infrastructure cloud",
                  d: "API sécurisée, base de données dédiée, hébergement cloud, monitoring, sauvegardes et conformité RGPD.",
                },
                {
                  n: "6",
                  t: "Documentation & formation",
                  d: "Documentation technique et utilisateur, guide d’utilisation du back-office et formation à la gestion quotidienne.",
                },
                {
                  n: "7",
                  t: "Accompagnement marketing — 90 jours",
                  d: "Stratégie, création publicitaire, gestion des campagnes Meta, Google et Apple Search Ads, reporting continu.",
                },
              ].map((d, i, arr) => (
                <div
                  key={d.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "var(--tint)",
                      color: "var(--cyan-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {d.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#fff",
                        marginBottom: "3px",
                      }}
                    >
                      {d.t}
                    </div>
                    <div
                      style={{
                        fontSize: "13.4px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      {d.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <InfoCallout title="Au-delà du développement">
              Progix accompagne le lancement commercial de ZenTrip pendant <Strong>90 jours</Strong>{" "}
              — stratégie d’acquisition des premiers voyageurs dans la communauté camping-car et
              van, campagnes publicitaires et optimisation continue — puis assure un{" "}
              <Strong>support post-livraison de 90 jours</Strong>.
            </InfoCallout>
          </div>
        </section>

        <Footer
          heading="Prêts à construire le copilote intelligent du road trip"
          text="Ce cahier des charges fixe le périmètre de ZenTrip et sert de base au devis contractuel associé. Toute évolution du périmètre fera l’objet d’un avenant écrit entre les parties."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section-03 user cards & Section-06 journey rows (local helpers).    */
/* ------------------------------------------------------------------ */

const TD: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  verticalAlign: "top",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_ALT: CSSProperties = { ...TD, background: "var(--paper)" };

const TD_NB: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_NB_ALT: CSSProperties = { ...TD_NB, background: "var(--paper)" };

type UserRow = { b: string; t?: string; node?: ReactNode };

function UserCard({
  letter,
  letterBg,
  title,
  desc,
  rows,
  tags,
}: {
  letter: string;
  letterBg: string;
  title: string;
  desc: string;
  rows: UserRow[];
  tags: Tag[];
}) {
  return (
    <div
      style={{
        background: "var(--card-grad)",
        border: "1px solid var(--card-bd)",
        borderRadius: "14px",
        margin: "16px 0",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
          padding: "20px 22px 14px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "11px",
            background: letterBg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 600,
            fontFamily: "var(--font-disp)",
            fontSize: "15px",
            boxShadow: "0 6px 14px rgba(12,35,64,.22)",
          }}
          aria-hidden="true"
        >
          {letter}
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "var(--font-disp)",
              fontSize: "16px",
              color: "#fff",
              fontWeight: 600,
              margin: "2px 0 3px",
            }}
          >
            {title}
          </h4>
          <div style={{ fontSize: "13.5px", color: "var(--slate)", lineHeight: 1.55 }}>{desc}</div>
        </div>
      </div>
      <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              padding: "6px 0",
              fontSize: "13.6px",
              color: "var(--slate)",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: "var(--cyan-ink)",
                flexShrink: 0,
                fontWeight: 700,
                fontSize: "12px",
                marginTop: "3px",
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            <span>
              {r.node ? (
                r.node
              ) : (
                <>
                  <Strong>{r.b}</Strong>
                  {r.t}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "0 22px 18px clamp(22px,4vw,76px)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((t) => (
          <span key={t.label} style={{ ...TAG_BASE, background: t.bg, color: t.fg, border: t.bd }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneyHeading({
  letter,
  children,
  marginTop = "14px",
}: {
  letter: string;
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-disp)",
        fontSize: "18px",
        color: "#fff",
        fontWeight: 600,
        margin: `${marginTop} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px", fontWeight: 700 }} aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

function JourneyRow({ steps }: { steps: ReadonlyArray<{ n: string; t: string; d: string }> }) {
  return (
    <div style={{ margin: "0 0 8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {steps.map((s) => (
          <div key={s.n} style={STEP_CARD}>
            <div style={STEP_EYEBROW}>{s.n}</div>
            <div style={STEP_TITLE}>{s.t}</div>
            <div style={STEP_DESC}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={STEP_RULE} aria-hidden="true" />
    </div>
  );
}
