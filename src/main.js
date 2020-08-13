import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/sass/main.sass'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faCalendar, faChevronDown, faTimes)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
