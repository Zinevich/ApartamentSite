import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './plugins/element.js'
import store from './store/store'
import router from './router/router'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
