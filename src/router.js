
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './pages/Main.vue';
import About from './pages/About.vue';
import Carousel from './components/carousel.vue';
import Projects from'./pages/Workspaces.vue';
import Contacts from'./pages/Contacts.vue';


Vue.use(VueRouter);


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
