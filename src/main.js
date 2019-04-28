// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-BR'

import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/style.css";


Vue.use(Vuex)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

//https://element.eleme.io/#/en-US/component/button

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
