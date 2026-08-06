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
            Le présent devis contractuel (le « Devis ») définit les modalités selon lesquelles{" "}
            <Strong>Progix Inc.</Strong> (le « Prestataire ») s’engage à concevoir, développer,
            déployer et accompagner commercialement <Strong>ZenTrip</Strong> (l’« Application »),
            une{" "}
            <Strong>
              application mobile et web de planification de road trip assistée par intelligence
              artificielle
            </Strong>
            , pour le compte du client signataire (le « Client »). À partir d’une simple description
            en langage naturel, l’Application génère un <Strong>itinéraire complet</Strong>, un{" "}
            <Strong>budget prévisionnel</Strong>, une <Strong>checklist personnalisée</Strong> et
            des <Strong>alternatives comparées</Strong>, puis accompagne le voyageur pendant tout
            son trajet et conserve le souvenir du voyage.
          </p>
          <p className={styles.p}>
            Le présent Devis couvre la conception technique, le développement complet, le moteur
            d’intelligence artificielle, la cartographie adaptée au gabarit du véhicule,
            l’infrastructure cloud, les applications mobiles iOS et Android, l’application web, le
            portail d’administration, la mise en ligne, l’accompagnement marketing et le support
            post-livraison. Le périmètre fonctionnel et technique détaillé fait l’objet du{" "}
            <DocRef>cahier des charges</DocRef> associé, qui complète le présent Devis. La signature
            du présent document vaut acceptation ferme de l’ensemble des conditions qui y figurent.
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
            lead="Une prestation complète, de la conception technique jusqu’au lancement commercial : le planificateur intelligent, le copilote en voyage, les modules budget, checklist et véhicule, l’infrastructure, le déploiement sur les stores, le marketing et le support. Rien à gérer en plus."
          />
          <SubHeading first>Profils voyageur & véhicule — création d’un voyage</SubHeading>
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
            lead="Un montant total de 6 400 €, réglé en 8 versements mensuels de 800 €. Il comprend l’ensemble des prestations ci-dessous : développement complet, moteur IA, cartographie, infrastructure, déploiement sur les stores, accompagnement marketing de 90 jours, documentation et support."
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
                    <strong>TOTAL — 800 €/mois × 8 mois</strong>
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
                Réglé en <Strong>8 versements mensuels de 800 €</Strong>, développement complet,
                déploiement et accompagnement marketing compris. Prix ferme, aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Service international fourni par une société <Strong>canadienne</Strong> : la prestation
            n’est pas assujettie à la TVA ni à aucune taxe de vente (service transfrontalier —
            autoliquidation par le preneur le cas échéant).{" "}
            <Strong>Le montant de 6 400 € correspond au montant net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement — 8 versements mensuels</SubHeading>
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
            Le montant total de <Strong>6 400 €</Strong> est réglé en{" "}
            <Strong>8 versements mensuels de 800 €</Strong>. Paiement par <Strong>Stripe</Strong>,{" "}
            <Strong>virement bancaire</Strong> ou <Strong>Interac</Strong> (si applicable).{" "}
            <Strong>
              Aucun travail de développement ne débute avant réception du premier versement.
            </Strong>
          </p>
          <InfoBox icon="i" title="Coûts récurrents des services tiers">
            ZenTrip s’appuie sur des services tiers facturés à l’usage —{" "}
            <Strong>API d’intelligence artificielle</Strong>, <Strong>cartographie</Strong>,{" "}
            <Strong>météo</Strong> et <Strong>bases d’hébergements</Strong>. Ces abonnements sont
            souscrits <Strong>au nom du Client</Strong>, restent sa propriété et sont{" "}
            <Strong>distincts du présent Devis</Strong>. Progix configure les intégrations, optimise
            la consommation et documente les coûts, mais ne perçoit aucune commission dessus.
          </InfoBox>
        </div>
      </section>

      {/* 04 — ACCOMPAGNEMENT MARKETING */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — MARKETING"
            title="Accompagnement marketing premium — 90 jours inclus"
            lead="Le forfait comprend un accompagnement marketing complet de 90 jours pour lancer ZenTrip auprès de la communauté camping-car, van et fourgon aménagé. Progix intervient en qualité de gestionnaire des campagnes ; les comptes publicitaires restent la propriété du Client et les dépenses publicitaires sont facturées directement par les plateformes."
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
                Étude du marché du <Strong>road trip</Strong>, positionnement de ZenTrip et
                stratégie d’acquisition des premiers voyageurs — propriétaires de{" "}
                <Strong>camping-cars, vans et fourgons aménagés</Strong>.
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
            L’accompagnement marketing couvre <Strong>90 jours</Strong> à compter du lancement :
            stratégie, création publicitaire, gestion des campagnes, optimisation quotidienne,
            reporting continu et réunions de suivi — inclus dans le forfait, sans coût
            supplémentaire.
          </InfoBox>
          <p className={styles.note}>
            Le Client s’engage à prévoir un budget média minimal de <Strong>2 200 €</Strong>,
            investi directement dans ses comptes publicitaires ; il est{" "}
            <Strong>distinct du présent devis</Strong> et directement dépensé sur les plateformes
            publicitaires (Meta, Google, Apple…). Progix ne perçoit aucune commission sur les
            budgets publicitaires.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, propriété & documentation" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            Le Client devient propriétaire des développements réalisés : la propriété intellectuelle
            est <Strong>transférée progressivement à mesure des paiements</Strong>. À paiement
            complet, le <Strong>code source</Strong>, la <Strong>base de données</Strong>, les{" "}
            <Strong>maquettes</Strong>, la <Strong>documentation</Strong> et l’
            <Strong>architecture</Strong> appartiennent au Client —{" "}
            <Strong>aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus — 90 jours</SubHeading>
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
                Documentation complète de l’architecture, de l’API, de la base de données et des
                intégrations tierces (IA, cartographie, météo, hébergements) — remise à la livraison
                finale pour garantir l’autonomie du Client.
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
          <InfoBox icon="!" title="Recommandations de voyage — rôle d’assistant">
            ZenTrip <Strong>recommande mais n’impose jamais</Strong> : la décision finale appartient
            toujours au voyageur. L’Application <Strong>ne vérifie pas les documents</Strong> de
            l’utilisateur et agit comme assistant en rappelant les formalités selon la destination.
            Les informations réglementaires, sanitaires et de disponibilité proviennent de sources
            tierces et sont fournies <Strong>à titre indicatif</Strong> ; Progix ne peut en garantir
            l’exhaustivité ni l’exactitude permanente.
          </InfoBox>
        </div>
      </section>

      {/* 06 — DÉLAIS */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAIS"
            title="Délais & phases de réalisation"
            lead="Développement livré en 90 jours à compter de la date de démarrage, en 4 phases, suivi de 90 jours d’accompagnement marketing. Réalisation itérative, avec validation du Client à chaque étape clé. Le calendrier peut évoluer selon la rapidité des validations et les contraintes des services tiers."
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
            Ce délai peut être prolongé lorsque l’<Strong>App Store</Strong> ou le{" "}
            <Strong>Google Play Store</Strong> demandent des modifications, des validations
            supplémentaires ou refusent une première soumission. Progix gère les refus éventuels,
            applique les correctifs nécessaires et accompagne le Client{" "}
            <Strong>jusqu’à validation</Strong> ; ces délais ne sont pas sous le contrôle de Progix.
          </InfoBox>
          <p className={styles.note}>
            Le périmètre livré correspond aux <Strong>phases 1 et 2</Strong> du cahier des charges —
            le planificateur intelligent et le copilote pendant le voyage. La{" "}
            <Strong>communauté ZenTrip</Strong> (phase 3) et l’
            <Strong>expansion internationale</Strong> (phase 4) constituent des évolutions
            ultérieures, hors du présent Devis. Tout retard du Client (validations, contenus, accès,
            comptes tiers) peut entraîner un <Strong>report équivalent du calendrier</Strong> — voir
            la section 07.
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
          <p className={styles.p}>
            Pour permettre la tenue du délai et la qualité de la livraison, le Client s’engage à :
          </p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Fournir les <Strong>validations nécessaires</Strong> et respecter les délais de
              validation.
            </li>
            <li className={styles.arrowItem}>
              Fournir les <Strong>contenus requis</Strong> (textes, visuels, identité de marque,
              informations commerciales) en temps utile.
            </li>
            <li className={styles.arrowItem}>
              Créer les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et fournir les accès — Progix
              accompagne la création et publie pour le Client.
            </li>
            <li className={styles.arrowItem}>
              Souscrire et maintenir les <Strong>abonnements aux services tiers</Strong> nécessaires
              au fonctionnement de l’Application (API d’intelligence artificielle, cartographie,
              météo, bases d’hébergements) et fournir les accès correspondants.
            </li>
            <li className={styles.arrowItem}>
              Fournir les accès <Strong>Stripe</Strong> nécessaires à l’intégration des abonnements
              et des paiements.
            </li>
            <li className={styles.arrowItem}>
              Prévoir et <Strong>maintenir le budget publicitaire minimum de 2 200 €</Strong> durant
              l’accompagnement marketing.
            </li>
            <li className={styles.arrowItem}>
              N’introduire <Strong>aucune nouvelle fonctionnalité</Strong> en cours de développement
              : toute demande supplémentaire fait l’objet d’un avenant (révision des coûts et des
              délais).
            </li>
          </ul>
          <BadgeHeading badge="B">Retards imputables au Client</BadgeHeading>
          <p className={styles.p}>
            Tout retard du Client — absence de validation, de contenu ou d’accès, ou demandes de
            modification — peut entraîner un <Strong>report équivalent du calendrier</Strong> de
            livraison.
          </p>
          <BadgeHeading badge="C">Dépendance aux services tiers</BadgeHeading>
          <p className={styles.p}>
            Le fonctionnement de ZenTrip repose sur des <Strong>API et données tierces</Strong>{" "}
            (intelligence artificielle, cartographie, météo, hébergements, réglementations). Une
            modification de leurs conditions d’accès, de leurs tarifs, de la qualité ou de la
            couverture de leurs données peut affecter certaines fonctionnalités. Progix sélectionne
            les fournisseurs les plus fiables et adapte les intégrations, sans pouvoir garantir la
            pérennité de services qu’elle ne contrôle pas.
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
            l’apprentissage des habitudes de voyage, sécurisation des données de localisation et des
            documents photographiés. Le Client demeure <Strong>responsable de traitement</Strong> au
            sens du règlement et assure la publication des mentions légales et de la politique de
            confidentialité.
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
