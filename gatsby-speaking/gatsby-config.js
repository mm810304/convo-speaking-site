const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: "Convo Speaking",
    description: "Practice speaking English on your own.  Speak English with beginner and intermediate level conversations using the conversation simulator.  Get real English speaking practice and gain confidence in your English!"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Alegreya\:400,700`,
          `Open Sans\:400,700`,
        ],
        display: `swap`
      }
    }
  ]
};
