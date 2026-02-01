import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Azure Data Handbook', // Kitap ismi
  tagline: 'Azure Data World Notes',
  favicon: 'img/favicon.ico',

  url: 'https://github.com/', // Yayına aldığında GitHub Pages linkin gelecek
  baseUrl: '/azure-data/', // Repo ismin
  organizationName: 'kcetin', // GitHub kullanıcı adın
  projectName: 'azure-data',

  onBrokenLinks: 'warn',

  // Çoklu dil ayarı
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'tr'], // Burada 'tr' mutlaka olmalı!
  localeConfigs: {
    en: { label: 'English' },
    tr: { label: 'Turkish' },
  },
},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Ana sayfa doğrudan dokümanlar olsun (Kitap gibi)
        },
        blog: false, // Blog özelliğini kapattım (Handbook olduğu için gerek yok)
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Azure Data Handbook',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          type: 'localeDropdown', // Sağ üstte dil değiştirme butonu
          position: 'right',
        },
        {
          href: 'https://github.com/kcetin/azure-data',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kardel Ruveyda Cetin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;