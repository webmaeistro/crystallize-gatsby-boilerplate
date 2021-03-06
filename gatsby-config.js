require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Ørn forlag | Utgiver av bøker`,
    description: `Ørn forlag brer sine vide vinger over sentrale deler av norsk natur, og bærer kunnskap ut til folket gjennom fysiske såvel som digitale medier.`,
    author: `@webmaeistro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://*.ornforlag.no`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          components: "./components", // <- will become ./src/components
          ui: "./ui", // <- will become ./src/components
          lib: "./lib", // <- will become ./src/components
          images: "./images", // <- will become ./src/components
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ørn forlag | Utgiver av bøker om Norsk natur og kultur `,
        short_name: `ornforlag.no`,
        start_url: `/`,
        icon: `src/images/ornforlag-icon.png`,
        background_color: `#f3f4f6`,
        theme_color: `#305363`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "CRYSTALLIZE",
        // This is the field under which it's accessible
        fieldName: "crystallize",
        // URL to query from
        url: `https://api.crystallize.com/${process.env.GATSBY_CRYSTALLIZE_TENANT_ID}/catalogue`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "CRYSTALLIZE_SEARCH",
        // This is the field under which it's accessible
        fieldName: "crystallize_search",
        // URL to query from
        url: `https://api.crystallize.com/${process.env.GATSBY_CRYSTALLIZE_TENANT_ID}/search`,
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
