import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SupUi from '../packages'
Vue.use(SupUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
