<template>
  <div id="app"> 
    <Main/>
    <Navbar />
    <About/>
    <Carousel />
    <Projects />
    <Contacts />
  </div>
</template>

<script>
import Main from './pages/Main.vue';
import Navbar from './components/navbar.vue';
import About from './pages/About.vue';
import Carousel from './components/carousel.vue';
import Projects from'./pages/Workspaces.vue';
import Contacts from'./pages/Contacts.vue';

export default {
  name: 'App',
  components: {
    Main, 
    Navbar,
    About,
    Carousel,
    Projects ,
    Contacts
  }
};
</script>