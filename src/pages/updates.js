import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "./pages.module.css";
import NoWrap from "../Components/NoWrap";

import Image from '@theme/IdealImage';
import v092_sommaireTaxes from '../../static/img/updates/update-sommaire-taxes.png';
import v092_sommaireTaxes2 from '../../static/img/updates/v092-fenetre-sommaire-taxes.png';
import v092_boutonAide from '../../static/img/updates/v093-bouton-aide.png';

const logiciel = `logiciel "Finance D - Tenue de livres simplifiée"`;

function VersionUpdate({version, date, children}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12', styles.feature)}>
            <div>
              <h3>Version {version}</h3>
              <p>Publiée le {date}</p>
            </div>
            {children}
            <hr/>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewFeatures({children}) {
  return (
    <div>
      <h4>Nouveautés:</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}

function BugFixes({children}) {
  return (
    <div>
      <h4>Correction de bugs:</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}

function Improvements({children}) {
  return (
    <div>
      <h4>Améliorations:</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}


export default function Faq() {
  return (
    <Layout
      title={`Mises à jour`} // appears as {title} | {siteName}
      description={`Notes de mises à jour du ${logiciel}.
      Découvrez les nouveautés et améliorations du logiciel.`} //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">Mises à jour</h1>
          <p className="hero__subtitle no-word-break">
            Notes de mises à jour du {logiciel}
          </p>
        </div>
      </header>
      <main>
        <VersionUpdate version={"0.9.5"} date={"2021-01-27"}>
          <NewFeatures>
            <li>Modifier le nom d'un client ou d'un fournisseur va maintenant modifier
              toutes les factures ayant le nom modifié afin qu'elles contiennent toutes
              le nouveau nom.
              Par exemple: Si je modifies le nom du client "Alex" pour "Alexandre",
              toutes mes factures au nom d'Alex deviendront au nom d'Alexandre.
              Ceci évite de perdre le solde dû à cette personne et garde vos factures existantes
              synchronisées avec vos modifications de nom du moment présent.
            </li>
          </NewFeatures>
          <Improvements>
            <li>La fenêtre de votre "Sommaire de taxes" est maintenant plus fidèle au formulaire de
              déclarations de taxes du gouvernement.
            </li>
            <li>La fenêtre de votre "État des résultats" est maintenant simplifiée, plus claire
              et plus fidèle aux normes comptables.
            </li>
            <li>Dans la fenêtre d'impression de vos factures de revenus, le bouton "envoyer par
              e-mail" va maintenant rendre le pop-up de prévisualisation du courriel
              centré dans la fenêtre afin d'assurer une visibilité immédiate. Auparavant, il
              pouvait arriver, si vous aviez une très longue facture avec plusieurs lignes de
              transactions, que le pop-up soit situé en haut de la fenêtre alors que vous étiez
              au bas de la fenêtre. Pour éviter de se demander où le pop-up est situé,
              votre visibilité va automatiquement se centrer sur lui.
            </li>
          </Improvements>
          <BugFixes>
            <li>Les copies de sauvegardes (accessibles dans la fenêtre d'Options), pouvaient
              perdre leur synchronisation avec la base de donnée. Maintenant, chaque backup
              a un numéro d'identification unique; ce qui permet de régler l'erreur.
            </li>
            <li>Correction de la séparation des pages imprimées lorsqu'il y a plus d'une page.
              Avant cette mise à jour, il pouvait y avoir du contenu mal positionné en imprimant
              sur plusieurs pages par exemple sur une facture de revenu ayant 25 lignes de transactions.
            </li>
            <li>Dans la fenêtre de Sommaire de taxes, le fait de choisir la période "vide"
              produisait une erreur interne inattendue.
              Ceci est résolu. Lorsque vous choisissez la période "vide",
              le logiciel détermine automatiquement la date de début et de fin en analysant
              toutes les dates de toutes vos factures (même comportement dans l'État des résultats).
            </li>
            <li>Corrections du rendu textuel sur macOS à deux endroits où le texte était trop large
              pour son conteneur.
            </li>
            <li>
              La fenêtre d'Options du logiciel, contenait une faute d'orthographe qui a été corrigée.
              Merci à Gabriel pour l'avoir trouvée.
            </li>
          </BugFixes>
        </VersionUpdate>

        <VersionUpdate version={"0.9.4"} date={"2021-01-25"}>
          <p>Cette version apporte un changement majeur avec la comptabilité pour mac
            qui n'était pas possible avant aujourd'hui.
          </p>
          <NewFeatures>
            <li>Compatibilité avec les ordinateurs macOS.</li>
          </NewFeatures>
          <BugFixes>
            <li>
              Il est maintenant possible d'utiliser des caractères spéciaux dans vos numéros
              de factures de revenus sans perdre la séquence de numéro logique.
              Par exemple: vous pouvez utiliser "1000-p" comme numéro de facture tout en conservant
              votre prochain numéro à "1001" (cette gestion se fait automatiquement).
              Avant cette correction, le prochain numéro donnait l'erreur "NaN"
              et votre séquence de numéros ne fonctionnait plus.
              Cette erreur est maintenant corrigée.
            </li>
          </BugFixes>
        </VersionUpdate>

        <VersionUpdate version={"0.9.3"} date={"2020-12-24"}>
          <div>
            <p>
              Cette mise à jour apporte une nouvelle fonction "Sommaire des taxes",
              qui résume vos transactions affectant le calcul de vos déclarations de taxes
              à payer ou à recevoir du Gouvernement.
            </p>
            <Image img={v092_sommaireTaxes}/>
            <br/>
            <p>
              Pour y accéder cliquez sur le bouton avec le symbole du Québec de la fenêtre principale.
            </p>
            <Image img={v092_sommaireTaxes2}/>
          </div>
          <br/>
          <div>
            <p>
              Nous avons également ajouté un lien vers le site de formation / documentation du logiciel
              où vous pourrez obtenir de l'aide et des trucs pour mieux utiliser Finance D.
            </p>
            <p>
              Notez toutefois que la documentation n'est pas encore complète.
            </p>
            <Image img={v092_boutonAide}/>
          </div>
          <br/>
          <div>
            <h4>Corrections de bugs:</h4>
            <ul>
              <li>Correction de l'autocomplete du nom de dossier à la fenêtre de connexion.</li>
              <li>Correction de l'états des résultats qui n'affichait pas toujours le calcul
                des revenus moins les dépenses.
              </li>
            </ul>
          </div>
          <div>
            <h4>Améliorations:</h4>
            <ul>
              <li>Ajout de tooltips pour certains raccourcis clavier de la fenêtre principale.</li>
            </ul>
          </div>
        </VersionUpdate>
      </main>
    </Layout>
  );
}