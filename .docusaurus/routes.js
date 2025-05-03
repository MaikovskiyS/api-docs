import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '44f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a54'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f57'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f6f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '5d5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '104'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/balance',
        component: ComponentCreator('/balance', '60d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/errors',
        component: ComponentCreator('/errors', 'dc9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/games',
        component: ComponentCreator('/games', 'd8a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/gift-cancel',
        component: ComponentCreator('/gift-cancel', 'dac'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/gift-create',
        component: ComponentCreator('/gift-create', '73d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/play',
        component: ComponentCreator('/play', 'd30'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/promo',
        component: ComponentCreator('/promo', '719'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/rollback',
        component: ComponentCreator('/rollback', 'dd5'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/security',
        component: ComponentCreator('/security', '5ee'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/session-create',
        component: ComponentCreator('/session-create', 'fd0'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/session-demo',
        component: ComponentCreator('/session-demo', '767'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/testing',
        component: ComponentCreator('/testing', '076'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/workflow',
        component: ComponentCreator('/workflow', '1e8'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
