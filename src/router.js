import Vue from 'vue'
import Tasks from './components/Tasks.vue'
import About from './components/About.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})