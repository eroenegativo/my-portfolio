<template>
  <section v-onscroll  id="main">
      <Header />
      <maintitle/>
  </section>
</template>

<script>
import maintitle from "../components/maintitle.vue";
import Header from "../components/header.vue";

export default({
   components: {
        Header,
        maintitle,
    },
  });
</script>


