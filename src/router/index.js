// import Meeting from '../components/meeting/meeting.vue';
// import Report from '@/components/report/report.vue'
import Router from 'vue-router'
import Vue from 'vue'
import allRank from '@/components/allRank/allRank';
import detail from '@/components/detail/detail.vue'
import headlineRank from '@/components/headlineRank/headlineRank';
import wechatRank from '@/components/wechatRank/wechatRank';
import weiboRank from '@/components/weiboRank/weiboRank';
import zwfw from '@/components/zwfw';
const Report = resolve => require(['@/components/report/report.vue'], resolve)
const Meeting = resolve => require(['../components/meeting/meeting.vue'], resolve)
Vue.use(Router)
//初始表现
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    window.scrollTo(savedPosition.x, savedPosition.y)
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.

    return position
  }
}

export default new Router({
  scrollBehavior,
  routes: [{
      path: "*",
      redirect: '/zwxmt'
    },
    {
      path: '/zwxmt',
      name: 'zwxmt',
      redirect: '/zwxmt/allRank',
      component: zwfw,
      children: [{
          path: 'allRank',
          name: 'allRank',
          component: allRank
        }, {
          path: 'wechatRank',
          name: "wechatRank",
          component: wechatRank,
        }, {
          path: 'weiboRank',
          name: "weiboRank",
          component: weiboRank
        },
        {
          path: 'headlineRank',
          name: "headlineRank",
          component: headlineRank
        },
        {
          path: "detail/:Otype/:name",
          name: "detail",
          component: detail
        }
      ]
    },
    {
      path: '/meeting',
      name: "meeting",
      component: Meeting
    }, {
      path: '/report',
      name: 'report',
      component: Report
    }
  ]
})
