import React from 'react';
import { graphql } from 'gatsby';

import Categories from '../components/Categories';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styles from './home.module.css';

const HomePage = ({ data }) => {
  const categories = data.categories.nodes.sort((a, b) => a.number > b.number ? 1 : -1);

  const SEOImage = categories.[0].image.asset.fluid;

  return (
    <React.Fragment>
      <SEO 
        title="Convo Speaking"
        description="Practice speaking English on your own.  Speak English with beginner and intermediate level conversations using the conversation simulator.  Get real English speaking practice and gain confidence in your English!"
        location="https://www.convospeaking.com"
        image={SEOImage.src}
      />
      <Layout>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Convo Speaking Pro</h1>
          <p className={styles.description}>Practice speaking English using advanced English grammar, expressions, idioms, and slang. <span className={styles.speakingPro}><a href="https://www.convospeakingpro.com" target="_blank" rel="noreferrer">Check out Convo Speaking Pro for more advanced English conversations.</a></span></p>
        </div>
        <Categories categories={categories} />
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query CategoryQuery {
    categories: allSanityCategories {
      nodes {
        id
        category_name
        number
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default HomePage;