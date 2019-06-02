// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-BR'
import Notifications from "../src/notifications/Notification";

import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/style.css";


Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(ElementUI, { locale })

Vue.http.options.root = 'http://localhost:8080/wotan/';

Vue.config.productionTip = false

//https://element.eleme.io/#/en-US/component/button

/* eslint-disable no-new */
new Vue({
  mixins: [Notifications],
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
