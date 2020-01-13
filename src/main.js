import Vue from 'vue'
import App from './App'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#app')