
import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(Router);
Vue.use(VueMeta);

import Home from './pages/Main.vue';
import About from './pages/About.vue';
import Projects from'./pages/Workspaces.vue';




/*const router = categoryRouting();

export default router;

function categoryRouting() {
  //const Category = (resolve) => require([Main, About,  Projects], resolve);

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', name: 'route', component: Category }
   
    ],
  });
  return router;
}*/

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

import router from './router'
	new Vue({
	  router,
	  render: h => h(App),
	}).$mount('#app')