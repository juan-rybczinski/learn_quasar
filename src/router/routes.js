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
      {
        path: 'flex-grid1',
        component: () => import('pages/FlexGrid1Page.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sub/IndexPage.vue') },
      { path: 'sub-page-1', component: () => import('pages/sub/SubPage1.vue') },
      { path: 'sub-page-2', component: () => import('pages/sub/SubPage2.vue') },
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
