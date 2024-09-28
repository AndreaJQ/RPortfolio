import React from 'react'
import '../css/formation.css'

function Formation() {
  return (
    <section class="academic" id="formacion">
    <h3 class="academic__title" >Education and Courses</h3>
    <div class="academic__courses">

        <div class="academic__courses__box">
            <div class="card__content">
                <a href="http://filo.unt.edu.ar/ingles/">
                    <img src="./assets/unt.jpg" alt="logo__unt" class="academic__courses__item__img"/></a>
                <h3 class="academic__courses__item__title">Profesora en Inglés</h3>
                <p class="academic__courses__item__subtitle">2013 - UNT</p>
            </div>
        </div>

        <div class="academic__courses__box">
            <div class="card__content">
                <a href="https://eggcooperation.com/ar/programacion-argentina/">
                    <img src="./assets/egg.png" alt="logo__egg" class="academic__courses__item__img"/></a>
                <h3 class="academic__courses__item__title">Programación Full Stack</h3>
                <p class="academic__courses__item__subtitle">2023 - Egg Education</p>
            </div>
        </div>

        <div class="academic__courses__box">
            <div class="card__content">
                <a href="https://www.aluracursos.com/cursos-online-front-end">
                    <img src="./assets/alura_logo.png" alt="logo__unt" class="academic__courses__item__img"/></a>
                <h3 class="academic__courses__item__title">Formación en Front End</h3>
                <p class="academic__courses__item__subtitle">2023 - Alura Latam</p>
            </div>
        </div>

        <div class="academic__courses__box">
            <div class="card__content">
                <a href="https://www.argentina.gob.ar/sites/default/files/15._utn_-_testing.pdf">
                    <img src="./assets/argPrograma.png"  alt="logo__unt" class="academic__courses__item__img"/></a>
                <h3 class="academic__courses__item__title">Testing Manual y Ágil</h3>
                <p class="academic__courses__item__subtitle">2023 - Argentina Programa</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Formation
