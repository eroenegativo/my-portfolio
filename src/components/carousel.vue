<template>
<VueSlickCarousel v-bind="settings" class="slider">
       <div class="slide">
        <a href="https://liminarivista.it"  class="project-link" alt="Rivista Culturale Online">
              <img src="../assets/limina-rivista.png"/>
              <h6>(2019)Custom Wordpress Theme</h6>
        </a>
      </div>
</VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
export default {
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: false,
          infinite:false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          customPaging : function(slider, i) {
            var thumb = document.querySelector(slider.$slides[i]).data();
           return '<a>'+thumb[i]+'</a>';
        },
      },
    }
  },
}
</script>