const routes = {
  path: '/',
  getComponent (nextState, cb) {
    require.ensure([], require => cb(null, require('@/views/home')), 'home')
  },
  childRoutes: [
    {
      path: '/login/user',
      getComponent (nextState, cb) {
        require.ensure([], require => cb(null, require('@/views/login/user')), 'loginUser')
      },
    },
    {
      path: '/login/student',
      getComponent (nextState, cb) {
        require.ensure([], require => cb(null, require('@/views/login/student')), 'loginStudent')
      },
    },
    {
      path: '/login/tree',
      getComponent (nextState, cb) {
        require.ensure([], require => cb(null, require('@/views/login/student/Tree')), 'loginTree')
      },
    },
  ]
}

export default routes