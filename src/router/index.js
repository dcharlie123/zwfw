import Meeting from '../components/meeting/meeting.vue';
import Report from '@/components/report/report.vue'
import Router from 'vue-router'
import Vue from 'vue'
import allRank from '@/components/allRank/allRank';
import detail from '@/components/detail/detail.vue'
import wechatRank from '@/components/wechatRank/wechatRank';
import weiboRank from '@/components/weiboRank/weiboRank';
import zwfw from '@/components/zwfw';
Vue.use(Router)

export default new Router({
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
          path:"detail/:type/:id",
          name:"detail",
          component:detail
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
