<template>
    <section v-onscroll id="work">
        <h2 class="section-title">Visual <br/> Workspaces</h2>
        <Projects />
        <VueSlickCarousel/>
    </section>
</template>


<script>
 import Projects from "../components/projects.vue";
  import VueSlickCarousel from "../components/carousel.vue";

 export default {
    components: {
        Projects,
        VueSlickCarousel
    },
 };
</script>