<template>
  <footer  id="contacts">
    <div class="row left" >
           <router-link  to="/portfolio" class="nav-link right">
            <span>go to portfolio</span>
           </router-link>
    </div>
    <SocialMedia />
  </footer>
</template>

<script>
 import SocialMedia from "../components/social-media.vue";

 export default {
    components: {
        SocialMedia
    },
 };
</script>