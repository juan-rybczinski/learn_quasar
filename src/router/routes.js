const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'typography',
        component: () => import('pages/TypographyPage.vue'),
      },
      {
        path: 'colors',
        component: () => import('pages/ColorsPage.vue'),
      },
      {
        path: 'spacing',
        component: () => import('pages/SpacingPage.vue'),
      },
      {
        path: 'breakpoints',
        component: () => import('pages/BreakpointsPage.vue'),
      },
      {
        path: 'classes-variables',
        component: () => import('pages/ClassesVariablesPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
