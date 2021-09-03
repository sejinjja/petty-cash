import Vue from 'vue'
import axios from 'axios'

import '@/assets/reset.css'

import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router: new VueRouter({ routes }),
  store,
  template: '<App/>'
}).$mount('#app')
