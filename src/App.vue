<template>
  <div id="app"> 
    <Main/>
    <!--<Navbar />-->
    <About/>
    <Projects />
    <Contacts />
  </div>
</template>

<script>
import Main from './pages/Main.vue';
//import Navbar from './components/navbar.vue';
import About from './pages/About.vue';
import Projects from'./pages/Workspaces.vue';
import Contacts from'./pages/Contacts.vue';

export default {
  name: 'App',
  components: {
    Main, 
    //Navbar,
    About,
    Projects ,
    Contacts
  }
};
</script>