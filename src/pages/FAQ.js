import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "./pages.module.css";

function QuestionRow({children}) {
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

function Question({children}) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {children}
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout
      title={`FAQ`} // appears as {title} | {siteName}
      description="Trouvez rapidement des réponses aux questions fréquentes
      dans notre section FAQ.
      Obtenez de l'aide et apprenez les trucs pour être le plus efficace possible
      avec le logiciel Finance D." //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">FAQ</h1>
          <p className="hero__subtitle no-word-break">
            Trouvez rapidement des réponses aux questions fréquentes.
          </p>
        </div>
      </header>
      <main>
        <QuestionRow>
          <Question>
            <h3>Comment créer une facture de revenus?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto assumenda commodi
              consequuntur deleniti eligendi esse est, excepturi expedita explicabo, fuga fugit impedit ipsam iusto
              maiores molestias mollitia sequi voluptatum.
            </p>
          </Question>
        </QuestionRow>
      </main>
    </Layout>
  )
}