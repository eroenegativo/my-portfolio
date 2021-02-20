
import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(Router);
Vue.use(VueMeta);

import Main from './pages/Main.vue';
import About from './pages/About.vue';
import Carousel from './components/carousel.vue';
import Projects from'./pages/Workspaces.vue';
import Contacts from'./pages/Contacts.vue';



const router = categoryRouting();

export default router;

function categoryRouting() {
  const Category = (resolve) => require([Main, About, Carousel, Projects, Contacts], resolve);

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', name: 'route', component: Category }
    ],
  });
  return router;
}
