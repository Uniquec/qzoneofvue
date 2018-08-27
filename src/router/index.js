import Vue from 'vue'
import Router from 'vue-router'
import QZone from '../pages/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QZone',
      component: QZone
    }
  ]
})
