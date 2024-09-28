import React from 'react'
import '../css/skills.css'
import imagenes from './imagenes.js';


function Skills() {
  return (
    <section class="skills" id="skills">
    <h3 class="skills__title">Skills</h3>
        <div class="skills__line">
            <div class="skills__box">
                <ul>
                    <li > <img class="skills__img"  src={imagenes.java} alt="" /> </li>
                    <li class="skills__name">Java</li>
                </ul>
            </div>
            <div class="skills__box">
                <ul>
                    <li > <img  class="skills__img" src={imagenes.Spring} alt="" /> </li>
                    <li class="skills__name">Spring</li>
                </ul>
            </div>
            <div class="skills__box">
                <ul>
                    <li > <img class="skills__img" src={imagenes.MySql} alt="" /> </li>
                    <li class="skills__name">MySql</li>
                </ul>
            </div>
            <div class="skills__box">
                <ul>
                    <li class="skills__img"><img  src={imagenes.HTML5}/></li>
                    <li class="skills__name"> HTML 5</li>
                </ul>
            </div>

            <div class="skills__box">
                <ul>
                    <li  class="skills__img"> <img  src={imagenes.CSS} alt=""/> </li>
                    <li class="skills__name">CSS</li>
                </ul>
            </div>

            <div class="skills__box">
                <ul>
                    <li  class="skills__img"> <img  src={imagenes.Javascript} alt=""/></li>
                    <li class="skills__name">Javascript</li>
                </ul>
            </div>

            <div class="skills__box">
                <ul>
                    <li  class="skills__img"><img  src={imagenes.NodeJS} alt=""/></li>
                    <li class="skills__name">Node JS</li>
                </ul>
            </div>

            <div class="skills__box">
                <ul>
                    <li  class="skills__img" > <img  src={imagenes.React} alt=""/> </li>
                    <li class="skills__name">React</li>
                </ul>
            </div>

          
    </div>
</section>
  )
}

export default Skills
