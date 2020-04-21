module.exports = {
  siteMetadata: {
    title: `Llámame Online`,
    description: `Llámame online es una plataforma rápida, segura y completamente gratis para crear conferencias online.`,
    author: `@moitorrijos`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand", "Nunito"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Llámame Online`,
        short_name: `Llámame`,
        start_url: `/`,
        background_color: `#1538cc`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/llamame-online-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
