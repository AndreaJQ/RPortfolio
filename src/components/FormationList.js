import React, { useRef } from 'react'
import '../css/formation.css'
import {formationData} from './formationData.js'

function FormationList() {
    const listRef = useRef();
    return (
      <section class="academic" id="formacion">
      <h3 class="academic__title" >Education and Courses</h3>
      <div class="academic__courses" ref={listRef}>
      {formationData.map((item)=>{
                return <div class="academic__courses__box">
      <div class="card__content" key={item.id}>
                            <a href={item.link}>
                                <img src={item.imgUrl} alt="logo" class="academic__courses__item__img"/></a>
                            <h3 class="academic__courses__item__title">{item.title}</h3>
                            <p class="academic__courses__item__subtitle">{item.subtitle}</p>
                </div>   
                </div>
               })}
         
       
    </div>
  </section>
  
    )
}

export default FormationList
