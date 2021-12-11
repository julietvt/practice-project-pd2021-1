import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './AgencyLevelExperience.module.sass';
import colorMap from './colorMap';

const AgencyLevelExperience = () => {
  const mapArticles = (article, index) => (
    <article className={styles.article} key={index}>
      <div style={colorMap[index]} className={styles.iconAgency}>
        <i className={article.iconsStyle} />
      </div>
      <h3>{article.header}</h3>
      <p>
        {article.body} <Link to={article.link}>Learn More</Link>
      </p>
    </article>
  );
  return (
    <section className={styles.sectionAgency}>
      <h2>Agency Level Experience</h2>
      <div className={styles.cardContainer}>{articles.map(mapArticles)}</div>
    </section>
  );
};
export default AgencyLevelExperience;
