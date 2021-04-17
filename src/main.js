import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWeixin, faWeibo, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-sliding-pagination/dist/style/vue-sliding-pagination.css'
import SlidingPagination from 'vue-sliding-pagination'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

library.add(faWeixin)
library.add(faWeibo)
library.add(faInstagramSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('sliding-pagination', SlidingPagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
