<template>
  <div id="app"> 
    <Header/>
    <div class="main-nav">
            <router-link to="/about" class="nav-link">
                <span>Who am i?</span>
            </router-link>
    </div>
    <router-view/>
    <Contacts />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Contacts from'./pages/Contacts.vue';

export default {
  name: 'App',
  components: {
    Contacts,
    Header
  }
};
</script>