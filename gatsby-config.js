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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-165840139-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
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
  ],
};
