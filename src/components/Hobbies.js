import React from 'react'
import '../css/hobbies.css'
import imagenes from './imagenes.js';

function Hobbies() {
  return (
    <section class="hobbies" id="hobbies">
    <h3 class="hobbies__title">Hobbies</h3>
        <div class="hobbies__line">

            <div class="hobbies__box">
                <ul>
                    <li class="hobbies__img"> 
                        <img  class="hobbies__img" src={imagenes.reading} width= "50px" height="50px"  alt=""/> </li>
                    <li class="hobbies__name">Reading</li>
                </ul>
            </div>
                <div class="hobbies__box">
                <ul>
                    <li class="hobbies__img"> 
                        <img class="hobbies__img" src={imagenes.cooking} alt=""/> </li>
                    <li class="hobbies__name">Cooking</li>
                </ul>
            </div>

            <div class="hobbies__box">
                <ul>
                    <li class="hobbies__img"> 
                        <img class="hobbies__img" src={imagenes.sewing}  alt=""/></li>
                    <li class="hobbies__name">Sewing</li>
                </ul>
            </div>

            <div class="hobbies__box">
                <ul>
                    <li class="hobbies__img"> 
                        <img class="hobbies__img" src={imagenes.music} alt=""/></li>
                    <li class="hobbies__name">Music</li>
                </ul>
            </div>

            <div class="hobbies__box">
                <ul>
                    <li class="hobbies__img">
                        <img class="hobbies__img" src={imagenes.tennis} alt=""/></li>
                    <li class="hobbies__name">Tennis</li>
                </ul>
            </div>
            

    </div>
</section>
  )
}

export default Hobbies
