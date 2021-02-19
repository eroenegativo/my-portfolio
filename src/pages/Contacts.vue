<template>
  <section  v-onscroll id="contacts">
    <div class="row align-center">
      <h4>
          ilaria.posca(at)gmail(dot)com
      </h4>
    </div>
    <div class="row space-between">
        <SocialMedia />
      
        <div>
            <p>Developed and designed by <i>Ilaria Olimpia Posca</i> in 2021<br/>
              Hosted on <a href="https://www.netlify.com" target="_blank" alt="Netlify" class="contact-link">Netlify</a>
            </p>

        </div>
    </div>
  </section>
</template>

<script>
 import SocialMedia from "../components/social-media.vue";

 export default {
    components: {
        SocialMedia
    },
 };
</script>