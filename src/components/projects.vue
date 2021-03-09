<template>
  <div class="row projects">
    <ol>
      <li>
          <a href="https://liminarivista.it"  class="project-link" alt="Rivista Culturale Online"
             @mouseover="hover = true"
              @mouseleave="hover = false"
            >
            liminaRivista (2019)
            <img src="../assets/limina-rivista.png" v-if="hover" class="modal-content"/>
          </a>
      </li>
    </ol>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hover: false,
    };
  }
}
</script>