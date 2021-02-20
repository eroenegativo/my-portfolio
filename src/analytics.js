import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-171602262-1',
});

export default {
    name: 'Google Analytics',
    methods: {
      track () {
        this.$ga.page('/')
      }
    }
  }