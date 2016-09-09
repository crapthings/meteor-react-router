export default function () {

  return {

    path: '/',

    component: Components.layout,

    indexRoute: { component: Components.home },

    childRoutes: [

      { path: 'posts', component: Components.posts },

      { path: 'about', component: Components.about },

      { path: 'test', component: Components.test },

    ]

  }

}
