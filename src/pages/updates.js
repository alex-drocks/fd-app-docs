import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "./pages.module.css";
import NoWrap from "../Components/NoWrap";

import Image from '@theme/IdealImage';
import v092_sommaireTaxes from '../../static/img/updates/update-sommaire-taxes.png';
import v092_sommaireTaxes2 from '../../static/img/updates/v092-fenetre-sommaire-taxes.png';
import v092_boutonAide from '../../static/img/updates/v093-bouton-aide.png';
import v096_changeFolder from '../../static/img/updates/v096_changeFolder.png';
import v096_optionsMesPreferences from '../../static/img/updates/v096_optionsMesPreferences.png';
import v097_imprimerRecherche from '../../static/img/updates/v0.9.7-imprimer-recherche.png';
import v097_imprimerTransactionsEtatResultats from '../../static/img/updates/v0.9.7-resultats-transactions.png';
import v097_codeTaxesCanada from '../../static/img/updates/v0.9.7-code-taxes-canada.png';
import v097_totalFactureNom from '../../static/img/updates/v0.9.7-total-facturé-du-nom.png';

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
        <VersionUpdate version={"0.9.7"} date={"2021-02-11"}>
          <NewFeatures>
            <li>
              Ajout de la possibilité d'imprimer les résultats affichés dans la fenêtre "Mes factures".
              <Image img={v097_imprimerRecherche}/>
              <br/>
              <br/>
            </li>
            <li>
              Ajout des sommes pour les colonnes TOTAL et SOLDE DÛ dans la fenêtre "Mes factures".
            </li>
            <li>
              Ajout de la possibilité de lister toutes les transactions des factures
              affichées dans la fenêtre "Mes factures".
            </li>
            <li>
              Ajout de la possibilité d'imprimer les transactions par catégories
              pour la fenêtre "État des résultats".
              <Image img={v097_imprimerTransactionsEtatResultats}/>
              <br/>
              <br/>
            </li>
            <li>
              Ajout de l'ensemble des provinces canadiennes au choix de calcul de taxes selon <a
              target={"_blank"}
              href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises/facturer-percevoir-quel-taux/calculatrice.html">
              Canada.ca
            </a>
              . Vous pouvez maintenant choisir le code taxe des provinces autres que le Québec
              parmi votre liste de code taxe pour chaque transaction d'une facture.
              <Image img={v097_codeTaxesCanada}/>
              <br/>
              <br/>
            </li>
            <li>
              Ajout de la possibilité de cacher la colonne QTÉ (quantité)
              dans la table de transaction de vos factures pour simplifier la vue au besoin.
            </li>
            <li>
              Ajout de l'information "Total facturé" dans l'éditeur de nom.
              <Image img={v097_totalFactureNom}/>
              <br/>
              <br/>
            </li>
          </NewFeatures>
          <Improvements>
            <li>
              Toutes les fenêtres qui ont la capacité d'imprimer vont maintenant
              produire du texte 100% noir au lieu d'utiliser les teintes de gris pâle
              afin d'assurer que l'impression soit claire sur papier
              autant qu'à l'écran d'ordinateur.
            </li>
            <li>
              Lorsqu'une ligne de transaction contient un code taxe mais que vous
              effacez manuellement la TPS et la TVQ, le code taxe va se réinitialiser
              pour indiquer l'impertinence d'utiliser un code taxe sans valeurs de TPS/TVQ.
            </li>
          </Improvements>
        </VersionUpdate>

        <VersionUpdate version={"0.9.6"} date={"2021-02-02"}>
          <NewFeatures>
            <li>
              Un nouvel onglet a été ajouté à la fenêtre d'options pour choisir
              si vous voulez afficher/cacher les colonnes de TPS / TVQ et ou
              SOUS-TOTAL / TOTAL dans la table de transactions des factures.
              Cette option a été ajoutée pour le calcul de taxes amélioré de cette mise à jour.
              <Image img={v096_optionsMesPreferences}/>
            </li>
            <li>
              Le menu au coin inférieur droit de la fenêtre principale contient
              maintenant une fonction pour "Changer de dossier" rapidement.
              Cela vous permet d'ouvrir un autre de vos dossiers
              de tenue de livres de manière efficace.
              <Image img={v096_changeFolder}/>
            </li>
          </NewFeatures>
          <Improvements>
            <li>
              Calcul de taxes amélioré dans la circonstance où vous utilisez les quantités de ligne.
              Le montant de TPS et TVQ est maintenant calculé à partir du SOUS-TOTAL
              plutôt qu'avec le prix à l'unité.
              Maintenant, les pourcentages sont arrondis à la perfection peu importe
              la complexité de vos transactions. Merci à Mr. Julien de l'avoir trouvé.
            </li>
            <li>
              Amélioration du nom des fenêtres de Finance D pour bien différencier
              la fenêtre principale (visible surtout dans la barre de tâches sur Windows).
            </li>
            <li>
              Amélioration de la transition entre la fenêtre d'accueil
              et la fenêtre principale au niveau de l'initialisation de la base de donnée
              ainsi que de la première apparition. Il y avait un effet de flash nuisible
              qui est maintenant réglé par un fade-in rapide.
            </li>
            <li>
              Ajout d'une notification visible dans la pré-visualisation de l'envoi
              de votre facture au client par courriel.
              Il n'était pas très évident qu'en mode "manuel",
              vous devez glisser le fichier PDF dans votre programme de messagerie avant l'envoi.
              NB: Il existe un mode automatisé avec connexion SMTP plus complexe à paramétrer mais génial.
            </li>
            <li>
              La liste des transactions affectant vos calculs de taxes
              (dans la fenêtre Sommaire de taxes), a été améliorée pour refléter
              les changements du correctif de calcul de taxes. De plus, il est possible de faire un
              double-clic sur une ligne pour afficher la facture d'origine.
            </li>
          </Improvements>
          <BugFixes>
            <li>
              Correction du dispositif de mise à jour automatique sur MacOS.
            </li>
            <li>
              Correction de la liste des modèles de factures et de transactions qui
              n'était pas synchronisée en tout temps selon le mode REVENUS / DÉPENSES actif.
            </li>
          </BugFixes>
          <p>
            <i>
              NB: Dû au nouveau calcul de taxes impliquant les quantités,
              vos factures sont automatiquement converties au bon format.
              Donc, il se pourrait que l'arrondissement des lignes de transactions
              ne soit pas identique à ce qui était enregistré avant la version 0.9.6.
              Par contre, votre total réel n'est pas affecté.
              Ce changement était nécessaire pour la précision des taxes à long terme.
            </i>
          </p>
        </VersionUpdate>

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