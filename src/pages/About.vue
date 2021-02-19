<template>
  <section v-onscroll id="about">
     <!--<h2 class="section-title">About me</h2>-->
    <div class="column align-center">
      <div class="box">
          <div class="box-wrapper">
              <div class="box-description">
                <p> Hello world, <br/>
                    i'm IO a technology enthusiast <b>Front-end Developer</b> working as a consultant in my hometown, Milan.<br/>
                    My skills are a perfect compromise between good design and technology.
                </p>
              </div>
              <div class="box-button">
                  <ul>
                    <li>
                      <a href="../assets/Ilaria_Olimpia_Posca_Resume_202001.pdf" target="_blank" alt="Currriculum Viate" download> 
                        <span>Download my CV</span> 
                        <font-awesome-icon :icon="['fa', 'download']" />
                      </a>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
        <div class="box">
          <div class="box-wrapper">
              <div class="box-description">
                <p> My background mostly focused on art and design<br/>
                </p>
              </div>
               <div class="box-button">
                  <ul>
                    <li>
                    <a href="https://www.linkedin.com/in/ilariaolimpia-posca/" target="_blank" alt="linkedin" >
                        <span>Linkedin</span>
                      <font-awesome-icon :icon="['fa', 'external-link-alt']" />
                    </a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/eroenegativo/" target="_blank" alt="Instagram">
                        <span>Instagram </span>
                        <font-awesome-icon :icon="['fa', 'external-link-alt']" />
                      </a>
                  </li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>
