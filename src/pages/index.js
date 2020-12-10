import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// My components
import NoWrap from "../Components/NoWrap";

const features = [
  {
    title: 'Facile à utiliser',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Le logiciel <NoWrap>Finance D</NoWrap> - Tenue de livres simplifiée a été conçu pour
        être simple et efficace.
      </>
    ),
  },
  {
    title: 'Facturation client',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        La gestion de vos factures de revenus est idéale pour les petites entreprises.
      </>
    ),
  },
  {
    title: 'Suivi des dépenses',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Saisissez vos dépenses.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  return (
    <Layout
      title={`Accueil`} // appears as Accueil | {siteName}
      description="Maîtrisez le logiciel: Finance D - Tenue de livres simplifiée.
      Obtenez de l'aide et apprenez les trucs pour être le plus efficace possible
      avec le logiciel Finance D." //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">Apprendre <NoWrap>Finance D</NoWrap></h1>
          <p className="hero__subtitle no-word-break">
            Maîtrisez le logiciel: <NoWrap>Finance D</NoWrap> - Tenue de livres simplifiée
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Commencez ici
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
