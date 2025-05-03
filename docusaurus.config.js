module.exports = {
  title: 'API Integration Docs',
  tagline: 'API integration with wallet & game provider',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'example', 
  projectName: 'api-docs',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'GAMEBEAT Logo',
        src: 'img/logo.png',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
