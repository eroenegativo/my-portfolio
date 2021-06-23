
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


import Home from './pages/Main.vue';
import About from './pages/About.vue';
import Projects from'./pages/Workspaces.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Projects
    }
  ]
})
