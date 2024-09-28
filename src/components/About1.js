import React from 'react';
import '../css/about.css';
import imagenes from './imagenes.js';


function About1() {
  return (
    <section>
        <div class="perfil">
    <div class="title__div">
                <img class="foto__perfil" src={imagenes.fotoPerfil} alt='fotoPerfil'/>
                <div class="title__container" >
                    <h2 class="title__bio">Hi! I'm Andrea Jalil and I'm a Full Stack Developer.</h2>
                    <h2 class="title__subsection">I've studied at Egg Education and at Alura Latam.</h2>
                    <ul class="title__network">
                      
                        <div class="linksredes">
                            <a class="iconolink" href="https://www.linkedin.com/in/andrea-jalil-quiroga/">
                            <img class="iconolink" src={imagenes.linkedin} alt="Mi Linkedin" /></a>
                            <div class="hidden"> My Linkedin</div>
                        </div>
                        <div class="linksredes">
                            <a class="iconolink" href="https://github.com/AndreaJQ"> 
                            <img class="iconolink" src={imagenes.github}  alt="Mi github" /></a>
                            <div class="hidden"> My Github</div>
                        </div>
                        <div class="linksredes">
                            <a class="iconolink" href="https://drive.google.com/file/d/164wN4Z6h-F-_-wDYtDEqZpW99BBN10cr/view?usp=sharing"> 
                            <img class="iconolink" src={imagenes.pdf} alt="Mi CV" /></a>       
                            <div class="hidden"> My CV</div>
                        </div>
                        <div class="linksredes">
                            <a class="iconolink" href="mailto:andreajalilq@gmail.com" > 
                                <img class="iconolink" src={imagenes.gmail} alt="Contact Me gMail" /></a>
                            <div class="hidden" href="mailto:andreajalilq@gmail.com"> Contact Me</div>
                        </div>

                        <div class="linksredes" href="https://wa.me/543815500953">
                            <a class="iconolink" href="https://wa.me/543815500953"> 
                            <img class="iconolink" src={imagenes.whatsapp} alt="Contact Me gMail" /></a>
                            <div class="hidden" >WhatsApp </div>
                        </div>
                        
                    </ul>
                </div>
            </div>
            </div>
            <div class="aboutme" id="aboutMe">
<div class="about__container">
<h3 class="about__tittle"> About me</h3>
<p class="about__paragraph">
    I'm a Teacher of English (UNT) and a Full Stack Developer (EGG Education & ONE Courses).
    I'm creative and risponsable, with ease and willingness to learn and innovate. I have the initiative to undertake different challenges.
</p>
</div>
</div>
</section>
  )
}

export default About1
