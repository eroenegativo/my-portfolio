<template>
  <section v-onscroll id="about" itemscope itemtype="https://schema.org/Person">
    <!--<h2 class="section-title">About me</h2>-->
    <div class="column align-center">
      <div class="box">
        <div class="box-wrapper">
          <div class="box-description">
             <h2 class="section-title">who<br/> <i>am i?</i></h2>
            <p>
              Hello world, <br />
              i'm <span itemprop="name">Ilaria Olimpia Posca</span> a technology enthusiast <b itemprop="jobTitle">Front-end Developer</b> working mainly
              as a <span itemprop="worksFor">consultant developer</span> in my hometown, <span itemprop="birthPlace">Milan</span>.<br />
            </p>
          </div>
          <div class="box-button">
            <ul>
              <li>
                <a
                  href="../assets/Ilaria_Olimpia_Posca_Resume_202001.pdf"
                  target="_blank"
                  alt="Currriculum Viate"
                  download
                >
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
            <p>
              My background is focused on design and art,<br /> i have a Bachelor's
              degree at <b itemprop="alumniOf">IED (European Design Institute)</b>.
            </p>
          </div>
        <!--  <div class="box-button">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/ilariaolimpia-posca/"
                  target="_blank"
                  alt="Linkedin"
                >
                  <span>Linkedin</span>
                  <font-awesome-icon :icon="['fa', 'external-link-alt']" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/eroenegativo/"
                  target="_blank"
                  alt="Instagram"
                >
                  <span>Instagram </span>
                  <font-awesome-icon :icon="['fa', 'external-link-alt']" />
                </a>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>
