import 'element-ui/lib/theme-chalk/index.css'
import "normalize.css"
import './assets/css/style.scss'

// import ElementUI from 'element-ui'
import {Card, Option, RadioButton, RadioGroup, Select} from 'element-ui';

import App from './App'
import VeLine from 'v-charts/lib/line.common'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false
// Vue.use(Form);
// Vue.use(FormItem);
Vue.use(Card);
Vue.use(Select);
Vue.use(Option);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.component(VeLine.name, VeLine)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
