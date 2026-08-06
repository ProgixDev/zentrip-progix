import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ---------- Cover data (from the renderVals() island) ---------- */
const coverBadges: ReadonlyArray<{ l: string; v: string; u: string }> = [
  { l: "Durée totale", v: "90", u: " j" },
  { l: "Phases", v: "4", u: "" },
  { l: "Sprints", v: "6", u: "" },
  { l: "Paiement", v: "8", u: " mois" },
];

const coverMeta: ReadonlyArray<{ l: string; v: string }> = [
  { l: "Projet", v: "ZenTrip — planification de road trip par IA" },
  { l: "Client", v: "____________" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "SPRINT-PROGIX-2026 · v1.0" },
];

/* ---------- Section 01 — overview data ---------- */
type Stat = { n: string; u: string; l: string };
const stats: ReadonlyArray<Stat> = [
  { n: "90", u: " jours", l: "de la conception à la mise en ligne" },
  { n: "4", u: "", l: "phases avec validation client" },
  { n: "6", u: "", l: "sprints de livraison itérative" },
  { n: "6 400", u: " €", l: "montant total · 800 €/mois × 8 mois" },
];

const G_NV = "linear-gradient(90deg,var(--navy),var(--navy-700))";
const G_TL = "linear-gradient(90deg,var(--navy-700),var(--cyan-deep))";
const G_CY = "linear-gradient(90deg,var(--cyan-deep),var(--cyan))";

type GanttRow = {
  name: string;
  sprint: string;
  left: string;
  width: string;
  label: string;
  bg: string;
};
const gantt: ReadonlyArray<GanttRow> = [
  {
    name: "Analyse & architecture",
    sprint: "Semaines 1–3",
    left: "0%",
    width: "16.4%",
    label: "J1–15",
    bg: G_NV,
  },
  {
    name: "Planificateur IA & itinéraires",
    sprint: "Semaines 4–8",
    left: "16.6%",
    width: "27.5%",
    label: "J16–40",
    bg: G_TL,
  },
  {
    name: "Véhicule, budget & checklist",
    sprint: "Semaines 9–11",
    left: "44.4%",
    width: "16.4%",
    label: "J41–55",
    bg: G_TL,
  },
  {
    name: "Carte interactive & hors ligne",
    sprint: "Semaines 12–14",
    left: "61.1%",
    width: "16.4%",
    label: "J56–70",
    bg: G_CY,
  },
  {
    name: "Entretien, partage & carnet",
    sprint: "Semaines 15–16",
    left: "77.7%",
    width: "10.9%",
    label: "J71–80",
    bg: G_CY,
  },
  {
    name: "Back-office, tests & déploiement",
    sprint: "Semaines 17–18",
    left: "88.8%",
    width: "10.9%",
    label: "J81–90",
    bg: G_NV,
  },
];

/* ---------- Section 02 — sprint detail data ---------- */
const ACC = "linear-gradient(160deg,var(--cyan-deep),var(--cyan))";
const NAV = "linear-gradient(160deg,var(--navy-900),var(--navy))";

type Tag = { label: string; bg: string; fg: string; bd: string };
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
const okT = (label: string): Tag => ({ label, bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" });

type Feat = { b: string; t: string };
const F = (b: string, t: string): Feat => ({ b, t });

type Sprint = {
  hasPhase: boolean;
  phaseNum?: string;
  phaseTitle?: string;
  phaseDays?: string;
  phaseDotBg?: string;
  leftBg: string;
  num: string;
  days: string;
  name: string;
  feats: ReadonlyArray<Feat>;
  tags: ReadonlyArray<Tag>;
};

const sprints: ReadonlyArray<Sprint> = [
  {
    hasPhase: true,
    phaseNum: "1",
    phaseTitle: "Phase 1 — Analyse & architecture",
    phaseDays: "J1 – J15",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "1",
    days: "J1–J15",
    name: "Cadrage, conception UI/UX, architecture & services tiers",
    feats: [
      F("", "Réunion de kickoff, analyse fonctionnelle et conception technique."),
      F("Design UI/UX", " de l’application voyageur, du cockpit et du back-office."),
      F(
        "Architecture, API & base de données",
        " : comptes, profils voyageur et véhicule, voyages, étapes, budgets, checklists, dépenses.",
      ),
      F(
        "Sélection & prototypage des services tiers",
        " : API d’intelligence artificielle, cartographie hors gabarit, météo, bases d’hébergements.",
      ),
      F("", "Infrastructure cloud, sécurité, conformité RGPD et préparation au déploiement."),
    ],
    tags: [cy("Conception validée"), nv("Backend & API"), gh("Architecture")],
  },
  {
    hasPhase: true,
    phaseNum: "2",
    phaseTitle: "Phase 2 — Planificateur intelligent",
    phaseDays: "J16 – J55",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "2",
    days: "J16–J40",
    name: "Moteur IA, itinéraires & alternatives",
    feats: [
      F("Compte, authentification & profil voyageur", " (adultes, enfants, animaux, préférences)."),
      F(
        "Création d’un voyage en langage naturel",
        " : extraction de la destination, de la durée, du budget et des contraintes, avec questions complémentaires.",
      ),
      F(
        "Génération de l’itinéraire complet",
        " : étapes quotidiennes, kilomètres, temps de conduite, pauses, hébergements et activités.",
      ),
      F(
        "Alternatives & explications",
        " : 2 à 3 options par portion, gestion intelligente du temps, recalcul automatique, export PDF.",
      ),
      F("", "Premier build de test (TestFlight / APK) et itérations."),
    ],
    tags: [cy("Moteur IA"), nv("Itinéraires & alternatives")],
  },
  {
    hasPhase: false,
    leftBg: ACC,
    num: "3",
    days: "J41–J55",
    name: "Profil véhicule, budget & checklist",
    feats: [
      F(
        "Profil véhicule & itinéraire hors gabarit",
        " : dimensions, PTAC, réservoirs, évitement des ponts bas, limitations et routes interdites.",
      ),
      F(
        "Base de véhicules pré-remplie",
        " : catalogue de modèles sélectionnables, valeurs ajustables par le voyageur.",
      ),
      F(
        "Budget intelligent",
        " : prévisionnel détaillé, saisie des dépenses par photo (OCR + IA), comparaison prévu / réel.",
      ),
      F(
        "Checklist personnalisée",
        " : génération selon profil, saison, météo et activités ; documents administratifs et informations sanitaires par pays.",
      ),
      F("Anticipation des réservations", " : indice de disponibilité et rappels planifiés."),
    ],
    tags: [cy("Hors gabarit"), nv("Budget & checklist")],
  },
  {
    hasPhase: true,
    phaseNum: "3",
    phaseTitle: "Phase 3 — Copilote en voyage",
    phaseDays: "J56 – J80",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "4",
    days: "J56–J70",
    name: "Carte interactive, points d’intérêt & mode hors ligne",
    feats: [
      F(
        "Carte interactive",
        " : points d’intérêt autour de l’itinéraire (campings, aires, spots, services, santé, loisirs).",
      ),
      F(
        "Mode hors ligne",
        " : téléchargement des cartes, consultation de l’itinéraire et des points sans connexion.",
      ),
      F(
        "Édition depuis la carte",
        " : ajout ou suppression d’un point avec recalcul instantané du trajet, du coût et de l’heure d’arrivée.",
      ),
      F(
        "Surveillance & plan B automatique",
        " : météo, trafic, routes fermées, ferries, disponibilité des hébergements.",
      ),
      F("Cockpit intelligent personnalisable", " : 5 à 6 indicateurs au choix du voyageur."),
    ],
    tags: [cy("Carte & hors ligne"), nv("Plan B automatique")],
  },
  {
    hasPhase: false,
    leftBg: ACC,
    num: "5",
    days: "J71–J80",
    name: "Entretien du véhicule, partage collaboratif & carnet de voyage",
    feats: [
      F(
        "Entretien du véhicule",
        " : checklist avant départ, rappels kilométriques, alertes proactives, recommandation du service utile.",
      ),
      F(
        "Partage collaboratif",
        " : rôles Organisateur, Copilote et Enfant, autorisations paramétrables, budget collaboratif et remboursements.",
      ),
      F(
        "Partage de localisation en temps réel",
        " : position des participants sur la carte, activable et désactivable, sur consentement.",
      ),
      F(
        "Mode Enfant (Explorateur)",
        " : suivi du trajet en temps réel, Carnet d’Explorateur, quiz, défis et badges.",
      ),
      F(
        "Carnet de voyage",
        " : album, carte parcourue, statistiques, budget final, export PDF et partage.",
      ),
    ],
    tags: [cy("Collaboratif"), nv("Carnet de voyage")],
  },
  {
    hasPhase: true,
    phaseNum: "4",
    phaseTitle: "Phase 4 — Tests & déploiement",
    phaseDays: "J81 – J90",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "6",
    days: "J81–J90",
    name: "Back-office, abonnements, tests & mise en ligne",
    feats: [
      F(
        "Portail web d’administration",
        " : comptes, voyages, abonnements Stripe et paiements par voyage, suivi de la consommation des API et tableau de bord analytique.",
      ),
      F(
        "Tests qualité (QA)",
        " sur mobile et web, corrections et optimisation des temps de réponse.",
      ),
      F(
        "Publication",
        " sur l’App Store et le Google Play Store, mise en ligne de l’application web, avec gestion des refus éventuels.",
      ),
      F("Formation & lancement", " de ZenTrip."),
    ],
    tags: [okT("ZenTrip publiée"), nv("Back-office & formation")],
  },
];

/* ---------- Section 03 — payment milestones data ---------- */
type Mile = { pct: string; nm: string; when: string; amt: string; trig: string };
const miles: ReadonlyArray<Mile> = [
  {
    pct: "MOIS 1 · 800 €",
    nm: "Démarrage",
    when: "Analyse, architecture, sélection des services tiers et lancement du développement",
    amt: "800 €",
    trig: "Déclenche le projet",
  },
  {
    pct: "MOIS 2–5 · 800 €/MOIS",
    nm: "Développement",
    when: "Planificateur IA, profil véhicule, budget, checklist, carte interactive et copilote en voyage",
    amt: "3 200 €",
    trig: "Cœur du produit",
  },
  {
    pct: "MOIS 6–8 · 800 €/MOIS",
    nm: "Lancement & marketing",
    when: "Back-office, tests, publication sur les stores et accompagnement marketing de 90 jours",
    amt: "2 400 €",
    trig: "Solde final",
  },
];

const dispFont = "var(--font-disp)";

/**
 * "Calendrier des sprints" document — header, hero cover, the four content
 * sections (overview + Gantt, sprint detail, payment milestones, cadence &
 * validation), and the footer. A Server Component composing client leaves
 * (header, FAB, scroll-reveal) at the edges.
 */
export function CalendrierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="calendrier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Calendrier des sprints · Planning de réalisation"
          title="Le plan de"
          titleLight="livraison, sprint par sprint"
          subtitle="Découpage détaillé de la réalisation de ZenTrip sur 90 jours — 4 phases et 6 sprints de livraison itérative, de la conception jusqu’à la publication sur les stores, suivis de 90 jours d’accompagnement marketing. Le montant total est réglé en 8 versements mensuels de 800 €."
          badges={coverBadges}
          meta={coverMeta}
        />

        {/* 01 — VUE D’ENSEMBLE */}
        <section
          id="s1"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="01 — VUE D’ENSEMBLE"
              title="Vue d’ensemble du planning"
              lead="Le projet est livré de façon itérative sur 90 jours, en 4 phases de réalisation, jusqu’à la publication sur les stores — suivies d’une 5ᵉ phase de 90 jours d’accompagnement marketing. Le calendrier ci-dessous s’aligne sur les phases du devis, tandis que le montant total de 6 400 € est réglé en 8 versements mensuels de 800 €."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
                gap: "1px",
                background: "var(--line)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                overflow: "hidden",
                margin: "18px 0",
              }}
            >
              {stats.map((t) => (
                <div
                  key={t.l}
                  style={{ background: "var(--card)", padding: "20px 16px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "28px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    {t.n}
                    <small style={{ fontSize: "14px", color: "var(--cyan)", fontWeight: 600 }}>
                      {t.u}
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      marginTop: "4px",
                      lineHeight: 1.35,
                    }}
                  >
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "30px 0 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Diagramme de Gantt
            </h3>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  padding: "22px 22px 18px",
                  background: "var(--paper)",
                  minWidth: "640px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "16px",
                    marginLeft: "172px",
                    marginBottom: "12px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {(
                    [
                      { left: "0%", label: "J1" },
                      { left: "15%", label: "J15" },
                      { left: "32%", label: "J30" },
                      { left: "48%", label: "J45" },
                      { left: "65%", label: "J60" },
                      { left: "81%", label: "J75" },
                      { left: "98%", label: "J90" },
                    ] as const
                  ).map((mark) => (
                    <span
                      key={mark.label}
                      style={{
                        position: "absolute",
                        left: mark.left,
                        top: 0,
                        fontFamily: dispFont,
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--muted)",
                      }}
                    >
                      {mark.label}
                    </span>
                  ))}
                </div>
                {gantt.map((g) => (
                  <div
                    key={g.sprint}
                    style={{ display: "flex", alignItems: "center", marginBottom: "9px" }}
                  >
                    <div style={{ width: "172px", flexShrink: 0, paddingRight: "14px" }}>
                      <div
                        style={{
                          fontFamily: dispFont,
                          fontWeight: 600,
                          fontSize: "12.5px",
                          color: "#fff",
                          lineHeight: 1.25,
                        }}
                      >
                        {g.name}
                      </div>
                      <div style={{ fontSize: "10.5px", color: "var(--muted)" }}>{g.sprint}</div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        flex: 1,
                        height: "30px",
                        background: "var(--card)",
                        borderRadius: "7px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          bottom: "3px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 9px",
                          color: "#fff",
                          fontSize: "10.5px",
                          fontWeight: 600,
                          fontFamily: dispFont,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          boxShadow: "0 2px 7px rgba(12,35,64,.20)",
                          left: g.left,
                          width: g.width,
                          background: g.bg,
                        }}
                      >
                        {g.label}
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                    marginLeft: "172px",
                    marginTop: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--navy)",
                      }}
                    />
                    Analyse & déploiement
                  </div>
                  {/* legend: planificateur */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan-deep)",
                      }}
                    />
                    Planificateur intelligent
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan)",
                      }}
                    />
                    Copilote en voyage
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid rgba(56,182,255,0.22)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                i
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Durée indicative & jalonnement
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  Les bornes en jours sont indicatives et peuvent glisser selon la rapidité des
                  validations client, les retours sur les interfaces et les contraintes liées aux
                  services tiers (intelligence artificielle, cartographie, météo, hébergements). Le
                  démarrage (J1) correspond au premier versement mensuel et à la réunion de cadrage.
                  Sprints de deux à trois semaines, avec une démo en fin de sprint. Le développement
                  est livré en 90 jours, tandis que le montant total est réglé en 8 versements
                  mensuels de 800 €.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ChapterBand
          eyebrow="Méthode"
          title="Itératif, validé"
          titleAccent="à chaque étape."
          sub="Vous validez chaque sprint via TestFlight ou APK lors d’un point de suivi — du premier itinéraire généré par l’IA jusqu’au carnet de voyage, la livraison finale ne réserve aucune surprise."
        />

        {/* 02 — DÉTAIL */}
        <section
          id="s2"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="02 — DÉTAIL" title="Détail des sprints" />
            {sprints.map((s) => (
              <div key={s.num}>
                {s.hasPhase ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      margin: "30px 0 6px",
                      paddingBottom: "10px",
                      borderBottom: "2px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "9px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "13px",
                        flexShrink: 0,
                        background: s.phaseDotBg,
                      }}
                    >
                      {s.phaseNum}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "17px",
                        color: "#fff",
                      }}
                    >
                      {s.phaseTitle}
                    </div>
                    <div
                      style={{
                        marginLeft: "auto",
                        fontFamily: dispFont,
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--cyan-ink)",
                        background: "var(--tint)",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.phaseDays}
                    </div>
                  </div>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    margin: "12px 0",
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "104px",
                      flexShrink: 0,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "18px 10px",
                      textAlign: "center",
                      background: s.leftBg,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "10px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      Sprint
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "34px",
                        lineHeight: 1,
                        margin: "2px 0 6px",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(255,255,255,.16)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.days}
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: "18px 22px", minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      {s.name}
                    </div>
                    {s.feats.map((f, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          gap: "9px",
                          padding: "4px 0",
                          fontSize: "13.4px",
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
                        >
                          ✓
                        </span>
                        <span>
                          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{f.b}</strong>
                          {f.t}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: "12px",
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: dispFont,
                          fontSize: "10px",
                          letterSpacing: ".8px",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                        }}
                      >
                        Livrables
                      </span>
                      {s.tags.map((t) => (
                        <span
                          key={t.label}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: dispFont,
                            fontWeight: 600,
                            fontSize: "10.5px",
                            letterSpacing: ".6px",
                            textTransform: "uppercase",
                            padding: "4px 11px",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
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
                </div>
              </div>
            ))}
            <div
              style={{
                background: "var(--ok-bg)",
                border: "1px solid rgba(52,226,192,0.25)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--ok)",
                }}
              >
                —
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#7ef0d2",
                    fontWeight: 600,
                  }}
                >
                  Puis : Phase 5 — accompagnement marketing (90 jours)
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  À la suite de la publication, Progix pilote l’accompagnement marketing pendant 90
                  jours : étude du marché, positionnement, création publicitaire (Meta, Instagram,
                  Facebook, UGC, landing pages), gestion des campagnes Meta Ads, Google Ads et Apple
                  Search Ads, optimisation quotidienne, reporting continu et réunions de suivi —
                  pour acquérir les premiers voyageurs au sein de la communauté camping-car, van et
                  fourgon aménagé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — JALONS */}
        <section
          id="s3"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="03 — JALONS"
              title="Jalons de paiement"
              lead="Le montant total de 6 400 € est réglé en 8 versements mensuels de 800 €. Le développement de ZenTrip est livré en 90 jours."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                gap: "14px",
                margin: "16px 0",
              }}
            >
              {miles.map((m) => (
                <div
                  key={m.pct}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "18px 18px",
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    transition: "transform .25s ease,box-shadow .3s ease,border-color .25s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "var(--cyan-ink)",
                    }}
                  >
                    {m.pct}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#fff",
                      margin: "7px 0 3px",
                    }}
                  >
                    {m.nm}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      minHeight: "30px",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.when}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#fff",
                      marginTop: "8px",
                      borderTop: "1px solid var(--line)",
                      paddingTop: "10px",
                    }}
                  >
                    {m.amt}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--cyan-ink)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {m.trig}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid rgba(56,182,255,0.22)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                €
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Montant total : 6 400 €
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  8 versements mensuels de 800 €, soit 6 400 € au total, comprenant le développement
                  complet, le moteur d’intelligence artificielle, la cartographie, le déploiement
                  sur les stores, l’accompagnement marketing de 90 jours, la documentation et le
                  support. Paiement par Stripe, virement bancaire ou Interac (si applicable). Un
                  budget publicitaire minimal de 2 200 € est à prévoir par le Client, distinct du
                  présent devis et directement dépensé sur les plateformes publicitaires. Les
                  abonnements aux services tiers (IA, cartographie, météo, hébergements) sont
                  souscrits au nom du Client et sont également distincts du devis. Aucun
                  développement ne débute avant réception du premier versement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — CADENCE */}
        <section
          id="s4"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="04 — CADENCE" title="Cadence & validation" />
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "14px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Rythme de travail
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Sprints de{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>deux à trois semaines</b>, avec
                une{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>démo en fin de chaque sprint</b>
                .
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Point d’avancement hebdomadaire
                </b>{" "}
                : revue de ce qui a été livré et priorités de la semaine suivante.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Développement <b style={{ color: "var(--ink)", fontWeight: 600 }}>itératif</b> :
                chaque sprint livre un incrément testable.
              </li>
            </ul>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                margin: "30px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Points de validation
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Validation du Client à chaque{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>fin de phase clé</b> (design,
                fonctionnalités, publication) avant de poursuivre.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Le délai suppose{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  au maximum deux réunions de suivi par semaine
                </b>{" "}
                et la validation rapide des livrables ; tout retard côté Client décale d’autant le
                calendrier et n’est pas compté dans le délai.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
                  color: "var(--slate)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    color: "var(--cyan)",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  —
                </span>
                Toute modification du périmètre fait l’objet d’un accord écrit (voir{" "}
                <a
                  href="/devis"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  devis
                </a>{" "}
                &{" "}
                <a
                  href="/cahier-des-charges"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  cahier des charges
                </a>
                ).
              </li>
            </ul>
            <div
              style={{
                background: "var(--amber-bg)",
                border: "1px solid rgba(232,161,58,0.3)",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--amber)",
                }}
              >
                ▸
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#f0c98a",
                    fontWeight: 600,
                  }}
                >
                  Ce qui peut décaler la date
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  La tenue des 90 jours dépend de la rapidité des validations client, des retours
                  sur les interfaces et des demandes supplémentaires. La date de publication peut
                  être décalée par l’App Store ou le Google Play Store (validations, demandes de
                  modification, rejet d’une première soumission) et par les contraintes liées aux
                  services tiers — accès aux API d’intelligence artificielle, de cartographie, de
                  météo et aux bases d’hébergements — des délais indépendants de la volonté de
                  Progix. Toute demande supplémentaire peut entraîner une révision des coûts et des
                  délais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer
          heading="Un plan clair, une livraison maîtrisée"
          text="Ce calendrier accompagne le devis et le cahier des charges. Sprint après sprint, vous voyez ZenTrip prendre forme — du premier itinéraire généré par l’IA jusqu’au lancement sur les stores."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}
