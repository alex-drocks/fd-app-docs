import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from "./pages.module.css";
import NoWrap from "../Components/NoWrap";

import Image from '@theme/IdealImage';
import v092_sommaireTaxes from '../../static/img/updates/update-sommaire-taxes.png';
import v092_sommaireTaxes2 from '../../static/img/updates/v092-fenetre-sommaire-taxes.png';
import v092_boutonAide from '../../static/img/updates/v093-bouton-aide.png';

const logiciel = `logiciel "Finance D - Tenue de livres simplifiée"`;

function VersionUpdateRow({children}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>
    </section>
  );
}

function VersionUpdateCol({children, id}) {
  return (
    <div className={clsx('col col--12', styles.feature)}
         id={id}>
      {children}
      <hr/>
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

        <VersionUpdateRow>
          <VersionUpdateCol>
            <div>
              <h3>Version 0.9.2</h3>
              <p>Publiée le 2020-12-24</p>
            </div>
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
                  des revenus moins les dépenses.</li>
              </ul>
            </div>
            <div>
              <h4>Améliorations:</h4>
              <ul>
                <li>Ajout de tooltips pour certains raccourcis clavier de la fenêtre principale.</li>
              </ul>
            </div>
          </VersionUpdateCol>
        </VersionUpdateRow>

      </main>
    </Layout>
  )
}