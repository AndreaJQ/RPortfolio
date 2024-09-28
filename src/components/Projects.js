import React from 'react'
import '../css/projects.css'

function Projects() {
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      
      let i;
      let experiencia__slides = document.getElementsByClassName("experiencia__slides");
      let dots = document.getElementsByClassName("dot");
      if (n > experiencia__slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = experiencia__slides.length}
      for (i = 0; i < experiencia__slides.length; i++) {
        experiencia__slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      experiencia__slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
  return (
    <section class="imgenDeFondo">
                <div class="experiencia__titulo">
                <div class="experiencia__container">
                    <div class="experiencia__slides fade">
                        <a href="https://andreajqq.github.io/encriptador-challenge/"
                        ><img class="imagenR" src="./images/encriptador.png" alt="Encriptador" width="633px" height="466px"/></a>
                        <div class="texto1">Encriptador de texto</div>
                    </div>

                    <div class="experiencia__slides fade">
                        <img class="imagenR" src="./images/ecommerce.png" alt="Próximamente" width="633px" height="466px"/>
                        <div class="texto1">Coming soon</div>
                    </div>
                 
                    <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>
                </div>
                <br/>
                <div class="dot_container">
                    <span class="dot" onclick={() => currentSlide(1)}></span>
                    <span class="dot" onclick={() => currentSlide(2)}></span>
                </div>
</div>
     
            </section>
  )
}

export default Projects
