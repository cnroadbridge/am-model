import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWeixin, faWeibo, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-sliding-pagination/dist/style/vue-sliding-pagination.css'
import SlidingPagination from 'vue-sliding-pagination'
// import VConsole from 'vconsole'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.config.errorHandler = function(err) {
  console.log(err.message)
}

// const vConsole = new VConsole()
// const isDevelopment = process.env.NODE_ENV === 'development'

library.add(faWeixin)
library.add(faWeibo)
library.add(faInstagramSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('sliding-pagination', SlidingPagination)

// isDevelopment && Vue.use(vConsole)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
