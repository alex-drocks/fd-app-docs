module.exports = {
  title: "Finance D - Documentation, aide et formations",
  tagline: 'Maîtriser le logiciel: Finance D - Tenue de livres simplifiée',
  url: 'https://docs.finance-d.com',
  baseUrl: '/logiciel-tenue-de-livres-simplifiee/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Finance D', // Usually your GitHub org/user name.
  projectName: 'fd-app-docs', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'beta_mode', // Any value that will identify this message.
      content:
        'La documentation est en construction.',
      textColor: '#666', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
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
        {
          to: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://finance-d.com',
          label: 'Site officiel',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Accès rapide',
          items: [
            {
              label: 'Installation du logiciel',
              to: 'docs/installation',
            },
            {
              label: 'Créer une facture',
              to: 'docs/mdx/',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Notre page Facebook',
              href: 'https://www.facebook.com/Finance.D.Logiciels',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Autres formations',
          items: [
            {
              label: 'Vidéos YouTube',
              href: 'https://www.youtube.com/channel/UCM4xW0oOsg6q73KA1emMJsg',
            },
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
              label: 'Présentation du logiciel',
              href: 'https://finance-d.com',
            },
            {
              label: 'À propos de nous',
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
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/alex-drocks/fd-app-docs/tree/master/',
        },

        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/alex-drocks/fd-app-docs/tree/master/',
          blogSidebarTitle: 'Articles récents',
          blogTitle: 'Articles',
          blogDescription: 'Lisez nos articles de formations spécialisées pour augmenter ' +
            'votre productivité avec le logiciel Finance D - Tenue de livres simplifiée.',
        },

        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {},

        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'],
};
