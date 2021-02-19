<template>
    <section v-onscroll id="work">
        <h2 class="section-title">Visual <br/> Workspaces</h2>
        <Projects />
    </section>
</template>


<script>
 import Projects from "../components/projects.vue";

 export default {
    components: {
        Projects
    },
 };
</script>