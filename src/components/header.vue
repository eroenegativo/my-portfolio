<template>
     <header>
         <div class="row space-between align-center">
             <div>
                 <themeToggle/>
             </div>
            <div>
                 <h4>Avaible for exciting projects</h4>
            </div>
            <div>
                 <a rel="outline-inward" href="mailto:ilaria.posca@gmail.com" target="_blank">
                     <span>EMail Me</span>
               </a>
            </div>
         </div>
     </header>
</template>
<script>
 import themeToggle from "./theme.vue";

 export default {
    components: {
        themeToggle,
     
    },
 };
</script>