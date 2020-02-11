module.exports = {
  siteMetadata: {
    title: `StoicallyTyped`,
    name: `StoicallyTyped`,
    siteUrl: `https://stoicallytyped.com`,
    description: `Posts on Android, Kotlin along with other tech and life topics.`,
    hero: {
      heading: `Musings on Android, Kotlin, internet privacy and life.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/matthewcmckenna`,
      },
      {
        name: `github`,
        url: `https://github.com/matthewcmckenna`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/stoicallytyped`,
      },
      {
        name: `unsplash`,
        url: `https://unsplash.com/@mmckenna`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@mattmck`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
