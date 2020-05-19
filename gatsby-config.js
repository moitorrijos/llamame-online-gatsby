module.exports = {
  siteMetadata: {
    title: `Llámame Online`,
    description: `Centrales Telefónicas y Videollamadas en la Nube.`,
    author: `@moitorrijos`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-json"],
      },
    },
    `gatsby-tinacms-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://llamame.online",
        sitemap: "https://llamame.online/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
