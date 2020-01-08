import Vue from 'vue';
window.Vue = Vue;
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
