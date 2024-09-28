import React from 'react';
import '../css/header.css';
import '../css/style.css'

const Header = () => {
  return (
    <div class="container">
    <img src="" alt=""/><h2 class="nombreTitulo">Andrea Jalil</h2>
  
    <nav class="headerPrincipal-nav">
        <a class="headerPrincipal-nav-link" href="#sobre-mi">About me</a>
        <a class="headerPrincipal-nav-link" href="#skills">Skills</a>
        <a class="headerPrincipal-nav-link" href="#hobbies">Hobbies</a>
        <a class="headerPrincipal-nav-link" href="#formacion">Education</a>
        <a class="headerPrincipal-nav-link" href="#xp">Proyects</a>
        <a class="headerPrincipal-nav-link" href="mailto:andreajalilq@gmail.com">Contact </a>
     
    </nav>
    </div>
  )
}

export default Header
