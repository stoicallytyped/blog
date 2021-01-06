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
    `@pauliescanlon/gatsby-mdx-embed`,
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
    {
      resolve: `gatsby-plugin-indieweb`,
      options: {
        auth: {
          twitter: `matthewcmckenna`,
          github: `matthewcmckenna`,
          email: `mmckenna@pm.me`,
        },
        webmention: `stoicallytyped.com`,
      },
    },
  ],
};
