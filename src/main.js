// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import MockData from './api/products'
import VueLocalStorage from 'vue-localstorage'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueResourceMock, MockData)
Vue.use(VueLocalStorage)
Vue.use(Vuetify)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
