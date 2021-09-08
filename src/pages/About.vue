<template>
  <section v-onscroll id="about" itemscope itemtype="https://schema.org/Person">
             <h2 class="section-title">who<hr/><br/> <i>am i?</i></h2>
       <div class="column">
           <p class="description light">
           My name is Ilaria Olimpia  class 1986, born in Milan. My background mainly focus on <i>design</i> and <i>visual arts</i>.
           I attended <strong>IED</strong> (<i>Istituto Europeo di Design</i>) where i graduated
           in Visual Art  with 98/100 back in <i>2009</i>.
         </p>
          <p class="description dark">
           My enthusiasm in Web development dates back in 2004 when the WWW still used tables. Nowdays i work as a consultant FE Developer.
         </p>
         <a href="../assets/Ilaria_Olimpia_Posca_Resume_202106.pdf" target="" align="center" alt="cv download" download >
           <img src="../assets/resume-icon.png" alt="icon-cv"><br/>
          <span>Download my CV</span>
         </a>
       </div>
      <router-link   to="/" class="nav-link">
                <font-awesome-icon :icon="['fa', 'arrow-left']"/><span>bring me back Home</span>
                <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  </defs>
</svg>
      </router-link>
  </section>
</template>
