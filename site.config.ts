import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '86ccc50a882f42c28065a8287c81660a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Caos website',
  domain: 'caos.me',
  author: 'Caos',

  // open graph metadata (optional)
  description: 'A website about blockchain development and investment',
  socialImageTitle: 'Caos website',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'caosbad',
  github: 'caosbad',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '714dcffe961d48fe83a23a4d8e2bf2c9'
    },
    {
      title: 'Contact',
      pageId: '7a535bf53146427b81ebfa01adc4fc47'
    },
    {
      title: 'Reading',
      pageId: '5dc9964a053d4530a3efe9e611ad0e73'
    },
    {
      title: 'Memos',
      pageId: '7108b56d4c174a3295209c54d3a0453e'
    }
  ]
})
