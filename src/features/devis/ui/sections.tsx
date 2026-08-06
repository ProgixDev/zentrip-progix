import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import {
  incl1,
  incl2,
  incl3,
  incl4,
  incl5,
  incl6,
  incl7,
  incl8,
  investment,
  payments,
  phases,
  trust,
} from "./content";
import styles from "./devis.module.css";

/** A styled reference to another document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b + i.t} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») engage <Strong>Progix Inc.</Strong> (le «
            Prestataire ») à concevoir, développer, déployer et accompagner commercialement{" "}
            <Strong>ZenTrip</Strong> (l’« Application ») pour le client signataire (le « Client ») :
            une{" "}
            <Strong>
              application mobile et web de planification de road trip par intelligence artificielle
            </Strong>
            . Le voyageur décrit son projet en quelques phrases ; l’Application produit{" "}
            <Strong>itinéraire</Strong>, <Strong>budget</Strong>, <Strong>checklist</Strong> et{" "}
            <Strong>alternatives comparées</Strong>, puis l’accompagne jusqu’au retour.
          </p>
          <p className={styles.p}>
            Sont couverts : conception, développement, moteur IA, cartographie au gabarit,
            infrastructure cloud, applications iOS, Android et web, portail d’administration, mise
            en ligne, marketing et support. Le périmètre détaillé figure au{" "}
            <DocRef>cahier des charges</DocRef> associé. La signature vaut acceptation ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="De la conception au lancement commercial : planificateur intelligent, copilote en voyage, budget, checklist, véhicule, infrastructure, déploiement, marketing et support. Rien à gérer en plus."
          />
          <SubHeading first>Profils voyageur & véhicule : création d’un voyage</SubHeading>
          <CheckList items={incl1} />
          <SubHeading>Planificateur intelligent & recommandations</SubHeading>
          <CheckList items={incl2} />
          <SubHeading>Budget intelligent & suivi des dépenses</SubHeading>
          <CheckList items={incl3} />
          <SubHeading>Checklist, formalités administratives & santé</SubHeading>
          <CheckList items={incl4} />
          <SubHeading>Copilote pendant le voyage & carte interactive</SubHeading>
          <CheckList items={incl5} />
          <SubHeading>Entretien du véhicule, partage & carnet de voyage</SubHeading>
          <CheckList items={incl6} />
          <SubHeading>Intégrations, infrastructure & déploiement</SubHeading>
          <CheckList items={incl7} />
          <SubHeading>Marketing, support & documentation</SubHeading>
          <CheckList items={incl8} />
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="6 400 € au total, réglés en 3 versements : 30 % à la signature, 50 % à la validation du planificateur, 20 % à la livraison. Tout est compris, sans supplément."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th className={styles.thRight}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td className={styles.tableNum}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>TOTAL · 30 % / 50 % / 20 %</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>6 400 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Investissement · montant total</div>
              <div className={styles.totalValue}>6 400 €</div>
              <div className={styles.totalNote}>
                Réglé en <Strong>3 versements : 30 %, 50 % et 20 %</Strong>, développement complet,
                déploiement et accompagnement marketing compris. Prix ferme, aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Prestation internationale fournie par une société <Strong>canadienne</Strong> : ni TVA
            ni taxe de vente (service transfrontalier, autoliquidation par le preneur le cas
            échéant). <Strong>6 400 € est le net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement en 3 versements</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            <Strong>1 920 €</Strong> à la signature, <Strong>3 200 €</Strong> à la validation du
            planificateur (fin de phase 2), <Strong>1 280 €</Strong> à la livraison. Paiement par{" "}
            <Strong>Stripe</Strong>, <Strong>virement</Strong> ou <Strong>Interac</Strong>.{" "}
            <Strong>Aucun développement ne débute avant le premier versement.</Strong>
          </p>
          <InfoBox icon="i" title="Coûts récurrents des services tiers">
            ZenTrip consomme des services facturés à l’usage : <Strong>IA</Strong>,{" "}
            <Strong>cartographie</Strong>, <Strong>météo</Strong>,{" "}
            <Strong>bases d’hébergements</Strong>. Ces abonnements sont souscrits{" "}
            <Strong>au nom du Client</Strong> et <Strong>distincts du présent Devis</Strong>. Progix
            les configure, optimise la consommation et documente les coûts, sans commission.
          </InfoBox>
        </div>
      </section>

      {/* 04 — ACCOMPAGNEMENT MARKETING */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — MARKETING"
            title="Accompagnement marketing premium, 90 jours inclus"
            lead="90 jours pour lancer ZenTrip auprès de la communauté camping-car et van. Progix pilote les campagnes ; les comptes publicitaires restent au Client et les plateformes le facturent directement."
          />
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Stratégie
              </h3>
              <p className={styles.cardText}>
                Marché du <Strong>road trip</Strong>, positionnement et acquisition des premiers
                voyageurs en <Strong>camping-car, van et fourgon aménagé</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Création publicitaire
              </h3>
              <p className={styles.cardText}>
                Créatifs <Strong>Meta, Instagram et Facebook</Strong>, contenus UGC, scripts
                publicitaires et landing pages dédiées.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Gestion publicitaire
              </h3>
              <p className={styles.cardText}>
                Création et pilotage des campagnes <Strong>Meta Ads</Strong>,{" "}
                <Strong>Google Ads</Strong> et <Strong>Apple Search Ads</Strong>, avec optimisation
                quotidienne.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Reporting & suivi
              </h3>
              <p className={styles.cardText}>
                <Strong>Reporting continu</Strong> des performances et{" "}
                <Strong>réunions de suivi</Strong> régulières pour analyser les résultats et ajuster
                la stratégie.
              </p>
            </div>
          </div>
          <InfoBox variant="ok" icon="★" title="90 jours d’accompagnement inclus">
            <Strong>90 jours</Strong> à compter du lancement : stratégie, créations, gestion des
            campagnes, optimisation quotidienne, reporting et réunions de suivi. Inclus dans le
            forfait, sans supplément.
          </InfoBox>
          <p className={styles.note}>
            Budget média minimal de <Strong>2 200 €</Strong> à prévoir par le Client, investi dans
            ses propres comptes (Meta, Google, Apple) et <Strong>distinct du présent devis</Strong>.
            Progix ne prend aucune commission dessus.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, propriété & documentation" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            La propriété intellectuelle est{" "}
            <Strong>transférée progressivement à mesure des paiements</Strong>. À paiement complet,{" "}
            <Strong>code source</Strong>, <Strong>base de données</Strong>,{" "}
            <Strong>maquettes</Strong>, <Strong>documentation</Strong> et{" "}
            <Strong>architecture</Strong> appartiennent au Client.{" "}
            <Strong>Aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus pendant 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              <Strong>Corrections de bugs</Strong> et ajustements mineurs (hors nouvelles
              fonctionnalités).
            </li>
            <li className={styles.arrowItem}>
              <Strong>Assistance technique</Strong> et <Strong>support prioritaire</Strong> tout au
              long de la période.
            </li>
          </ul>
          <SubHeading>
            Documentation remise à la livraison <Pill>Incluse</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ✎
                </span>
                Documentation technique
              </h3>
              <p className={styles.cardText}>
                Architecture, API, base de données et intégrations tierces (IA, cartographie, météo,
                hébergements), remises à la livraison pour garantir l’autonomie du Client.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  ▸
                </span>
                Guide d’utilisation & formation
              </h3>
              <p className={styles.cardText}>
                Guide d’utilisation du back-office et des applications, avec une formation à la
                gestion quotidienne de ZenTrip et au pilotage des abonnements.
              </p>
            </div>
          </div>
          <InfoBox icon="!" title="Recommandations de voyage : rôle d’assistant">
            ZenTrip <Strong>recommande mais n’impose jamais</Strong> : la décision finale revient au
            voyageur. L’Application <Strong>ne vérifie pas les documents</Strong> et se borne à
            rappeler les formalités selon la destination. Les informations réglementaires,
            sanitaires et de disponibilité viennent de sources tierces et restent{" "}
            <Strong>indicatives</Strong> ; Progix n’en garantit ni l’exhaustivité ni l’exactitude
            permanente.
          </InfoBox>
        </div>
      </section>

      {/* 06 — DÉLAIS */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAIS"
            title="Délais & phases de réalisation"
            lead="90 jours de développement en 4 phases, puis 90 jours de marketing. Réalisation itérative, validée par le Client à chaque étape clé. Le calendrier dépend de la rapidité des validations et des services tiers."
          />
          {/* 5 phases: widen the track so they lay out 3 + 2 rather than 4 + 1. */}
          <div
            className={styles.grid3}
            style={{
              margin: "16px 0",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            }}
          >
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Délais liés aux stores (hors de notre contrôle)">
            L’<Strong>App Store</Strong> et le <Strong>Google Play Store</Strong> peuvent exiger des
            modifications ou refuser une première soumission. Progix gère les refus, corrige et
            accompagne <Strong>jusqu’à validation</Strong>, mais ne maîtrise pas ces délais.
          </InfoBox>
          <p className={styles.note}>
            Le périmètre livré couvre les <Strong>phases 1 et 2</Strong> du cahier des charges
            (planificateur intelligent et copilote en voyage). La{" "}
            <Strong>communauté ZenTrip</Strong> (phase 3) et l’
            <Strong>expansion internationale</Strong> (phase 4) restent hors Devis. Tout retard du
            Client entraîne un <Strong>report équivalent du calendrier</Strong> (section 07).
          </p>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — ENGAGEMENTS" title="Engagements du Client" />
          <BadgeHeading badge="A" first>
            Ce que le Client fournit
          </BadgeHeading>
          <p className={styles.p}>Pour tenir le délai et la qualité, le Client s’engage à :</p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Donner ses <Strong>validations</Strong> dans les délais convenus.
            </li>
            <li className={styles.arrowItem}>
              Fournir les <Strong>contenus</Strong> (textes, visuels, identité de marque) en temps
              utile.
            </li>
            <li className={styles.arrowItem}>
              Ouvrir les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et en donner les accès. Progix
              accompagne la création et publie.
            </li>
            <li className={styles.arrowItem}>
              Souscrire les <Strong>abonnements aux services tiers</Strong> (IA, cartographie,
              météo, hébergements) et fournir les accès, ainsi que les accès <Strong>Stripe</Strong>
              .
            </li>
            <li className={styles.arrowItem}>
              Maintenir le <Strong>budget publicitaire minimum de 2 200 €</Strong> pendant
              l’accompagnement.
            </li>
            <li className={styles.arrowItem}>
              N’ajouter <Strong>aucune fonctionnalité</Strong> en cours de route : toute demande
              supplémentaire passe par un avenant (coûts et délais révisés).
            </li>
          </ul>
          <BadgeHeading badge="B">Retards imputables au Client</BadgeHeading>
          <p className={styles.p}>
            Une validation, un contenu ou un accès manquant, comme une demande de modification,
            entraîne un <Strong>report équivalent du calendrier</Strong>.
          </p>
          <BadgeHeading badge="C">Dépendance aux services tiers</BadgeHeading>
          <p className={styles.p}>
            ZenTrip repose sur des <Strong>API et données tierces</Strong> (IA, cartographie, météo,
            hébergements, réglementations). Un changement de leurs conditions, tarifs ou couverture
            peut affecter certaines fonctionnalités. Progix choisit les fournisseurs les plus
            fiables et adapte les intégrations, sans garantir la pérennité de services qu’elle ne
            contrôle pas.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige sera soumis aux tribunaux compétents du district
            judiciaire de Montréal.
          </p>
          <BadgeHeading badge="2">Résiliation anticipée</BadgeHeading>
          <p className={styles.p}>
            Le Client peut mettre fin au contrat avant son terme en cas de{" "}
            <Strong>manquements importants imputables à Progix</Strong> (non-respect majeur du
            périmètre validé, absence prolongée de suivi, dépassements importants de délais sans
            justification). Dans ce cas, le Client conserve les éléments déjà développés, les
            fichiers graphiques, les éléments techniques et la{" "}
            <Strong>propriété intellectuelle correspondant aux montants déjà réglés</Strong>,
            conformément au transfert progressif prévu à la section 05.
          </p>
          <BadgeHeading badge="3">Protection des données personnelles</BadgeHeading>
          <p className={styles.p}>
            L’Application est conçue dans le respect du <Strong>RGPD</Strong> pour le marché
            européen : minimisation des données collectées, consentement explicite pour
            l’apprentissage des habitudes de voyage, sécurisation des documents photographiés. Le{" "}
            <Strong>partage de localisation entre participants</Strong> est désactivé par défaut,
            soumis à un consentement explicite et révocable à tout moment. Le Client demeure{" "}
            <Strong>responsable de traitement</Strong> au sens du règlement et assure la publication
            des mentions légales et de la politique de confidentialité.
          </p>
          <BadgeHeading badge="4">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef> associé, constitue
            l’intégralité de l’entente entre les Parties relativement à son objet et remplace toute
            entente ou communication antérieure.
          </p>
          <BadgeHeading badge="5">Modifications</BadgeHeading>
          <p className={styles.p}>
            Toute modification du présent Devis ou du périmètre convenu doit faire l’objet d’un
            écrit signé par les deux Parties.
          </p>
          <BadgeHeading badge="6">Divisibilité</BadgeHeading>
          <p className={styles.p}>
            Si une disposition du présent Devis est jugée invalide ou inapplicable, les autres
            dispositions demeurent en vigueur et de plein effet.
          </p>
        </div>
      </section>
    </>
  );
}
