module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '86ccc50a882f42c28065a8287c81660a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Caos website',
  domain: 'caos.me',
  author: 'Caos',

  // open graph metadata (optional)
  description: 'A website about blockchain develop and investment',
  socialImageTitle: 'Caos website',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'caosbad',
  github: 'caosbad',
  // linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '714dcffe961d48fe83a23a4d8e2bf2c9',
    '/contact': '7a535bf53146427b81ebfa01adc4fc47',
    '/notes': '2fe0e353b1a7407683c326900abb6c7a',
    '/memos': '7108b56d4c174a3295209c54d3a0453e'
  }
  // pageUrlOverrides: null
}
