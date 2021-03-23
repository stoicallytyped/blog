module.exports = {
  siteMetadata: {
    title: `StoicallyTyped`,
    name: `StoicallyTyped`,
    siteUrl: `https://stoicallytyped.com`,
    description: `Matt McKenna - Posts on Android, Kotlin, and internet privacy along with other tech and life topics.`,
    hero: {
      heading: `Matt McKenna - Posts on Android, Kotlin, internet privacy and life.`,
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
    locale: "en",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StoicallyTyped`,
        short_name: `StoicallyTyped`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // -- THEMES --
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/resume",
        contentPath: "resume/",
        showThemeLogo: false,
        theme: "bright-green",
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        rootPath: "/",
        basePath: "/",
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        authorsPage: true,
        sources: {
          local: true,
          contentful: false,
        },
      },
    },
  ],
};

// GATSBY_EXPERIMENTAL_LAZY_DEVJS=true gatsby develop
// Please do let us know how it goes (good, bad, or otherwise) at https://gatsby.dev/lazy-devjs-umbrella