import React from 'react'
import imagenes from './imagenes.js';

function Footer() {
  return (
    <section class="footerCombined">
    <div class="nav">
         <nav class="footer-nav">
            <a class="headerPrincipal-nav-link" href="#aboutMe">About me</a>
            <a class="headerPrincipal-nav-link" href="#skills">Skills</a>
            <a class="headerPrincipal-nav-link" href="#hobbies">Hobbies</a>
            <a class="headerPrincipal-nav-link" href="#formacion">Education</a>
            <a class="headerPrincipal-nav-link" href="#projects">Projects</a>
            <a class="headerPrincipal-nav-link" href="mailto:andreajalilq@gmail.com">Contact </a>
            
         </nav>
    </div>
    <div class="linksExternos">
        <ul class="footer__links">
            <a class="iconolink" href="https://www.linkedin.com/in/andrea-jalil-quiroga/">
            <img class="iconolink" src={imagenes.linkedin} alt="Mi Linkedin" /></a>
            <a class="iconolink" href="https://github.com/AndreaJQ"> 
            <img class="iconolink" src={imagenes.github}  alt="Mi github" /></a>
            <a class="iconolink" href="https://drive.google.com/file/d/164wN4Z6h-F-_-wDYtDEqZpW99BBN10cr/view?usp=sharing">
            <img class="iconolink" src={imagenes.pdf} alt="Mi CV" /></a>     
            <a class="iconolink" href="mailto:andreajalilq@gmail.com" >
            <img class="iconolink" src={imagenes.gmail} alt="Contact Me gMail" /></a>
            <a class="iconolink" href="https://wa.me/543815500953"> 
            <img class="iconolink" src={imagenes.whatsapp} alt="Contact Me gMail" /></a>
       </ul>
    </div>
    <div class="footer">
    <div class="footer__rodape">
                    <p>Developed by Andrea Jalil</p>
                    <p>2023</p>
                </div>
                </div>
</section>


  )
}

export default Footer
