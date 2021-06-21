<template>
  <div class="row projects">
    <ol class="desktop-only">
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
    <ol class="mobile-only">
      <li>
          <a href="https://liminarivista.it"  class="project-link" alt="Rivista Culturale Online">
           <span> LiminaRivista (2019) </span>
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