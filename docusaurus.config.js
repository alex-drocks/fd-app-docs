module.exports = {
  title: "Apprendre Finance D",
  tagline: 'Maîtiser le logiciel: Finance D - Tenue de livres simplifiée',
  url: 'https://docs.finance-d.com',
  baseUrl: '/logiciel-tenue-de-livres-simplifiee/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Finance D', // Usually your GitHub org/user name.
  projectName: 'fd-app-docs', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
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
      logo: {
        alt: 'Logo Finance D',
        src: 'img/logo.png',
        href: 'https://finance-d.com/',
      },
      copyright: `© ${new Date().getFullYear()} Finance D`,
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
