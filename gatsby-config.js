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
          families: ["Quicksand:400,600", "Nunito400:700"],
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
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "5ed29ca6c75cbf1769f0db37",
        // get this from the tawk script widget
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
