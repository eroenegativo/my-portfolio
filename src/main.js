import Vue from 'vue';
import App from './App.vue';

/*Stylesheet*/
import Scss from './stylesheet/index.scss';

/*plugin*/


/*Custom JS */
import Theme from './theme.js';
import Analytics from './analytics.js';
import ScrollAnimation from './directives/scrollAnimation.js';
import router from './router'
Vue.directive('onscroll', ScrollAnimation);
/*Font Awesome*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faDownload, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

library.add( faArrowLeft, faDownload, faExternalLinkAlt)

Vue.config.productionTip = false
Vue.use(Scss);
Vue.use(Theme);
Vue.use(FontAwesomeIcon);
Vue.use(Analytics);

Vue.use(router);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




