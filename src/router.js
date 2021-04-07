import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: () => import('./views/NewsDetails.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue'),
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('./views/Case.vue')
    },
    {
      path: '/casedetails/:id',
      name: 'casedetails',
      component: () => import('./views/CaseDetails.vue')
    },
    {
      path: '/goin',
      name: 'goin',
      component: () => import('./views/GoIn.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    }
  ]
})

/*// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})*/

export default router
