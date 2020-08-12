import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/sass/main.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
