module.exports = {
  title: 'Documentation de Finance D',
  tagline: 'Maîtiser le logiciel: Tenue de livres simplifiée',
  url: 'https://docs.finance-d.com/tenue-de-livres-simplifiée',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Finance D', // Usually your GitHub org/user name.
  projectName: 'fd-app-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Finance D',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Articles',
          position: 'left'
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation',
              to: 'docs/',
            },
            {
              label: 'Factures de revenus',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Liens',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Finance.D.Logiciels',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCM4xW0oOsg6q73KA1emMJsg',
            },
          ],
        },
        {
          title: 'Autres formations',
          items: [
            {
              label: 'Articles',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Finance D',
          items: [
            {
              label: 'Obtenir le logiciel',
              href: 'https://finance-d.com',
            },
            {
              label: 'À propos',
              href: 'https://finance-d.com/a-propos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Finance D.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/alex-drocks/fd-app-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/alex-drocks/fd-app-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
