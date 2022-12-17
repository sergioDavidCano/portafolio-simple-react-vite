import './hero.scss';
import React from 'react'

export const Hero = () => {
  return (
    <section id='hero' className="container-section">
      <div className="container-hero">
        <div className="container-info">
          <h2 className="container-info__title">Permítame presentarme</h2>
          <hr />
          <p className="container-info__presentaction">
            Soy un<strong>programador Full Stack</strong>🧑 💻 y<strong>estudiante avanzado de Ingeniería en sistemas de información</strong>👨 💻 . Busco experiencias y herramientas de desarrollo para poder mejorar y potenciarme constantemente. Tanto Front-end como Back-end me son muy atractivos a la hora de trabajar, lo cual me lleva a que me esfuerce en ambos para que sea un programa totalmente escalable, organizado y realizado con muchas ganas.
          </p>
          <hr />
          <ul className="container-info__personal">
            <li className="container-info__personal__li">
              <span className="container-info__personal__li__span">Nombre :</span> Leandro Morello
            </li>
            <li className="container-info__personal__li">
              <span className="container-info__personal__li__span">Edad : </span> 24 años
            </li>
            <li className="container-info__personal__li">
              <span className="container-info__personal__li__span">Dirección :</span> Mendoza, Argentina
            </li>
            <li className="container-info__personal__li">
              <span className="container-info__personal__li__span">Nivel de inglés :</span> A2 (En curso)
            </li>
            <li className="container-info__personal__li">
              <span className="container-info__personal__li__span">Correo electrónico:</span> leandro_mza008@hotmail.com
            </li>
          </ul>
          <a type="button" title="Descargar Curriculum Vitae" className="buttom-view-curriculum">Ver Curriculum Vitae</a>
        </div>
        <div className="container-photo">
          <img className="container-photo__img" src="https://th.bing.com/th/id/OIP.Bk7ktlK0M_GxaFbsLQwgxQHaFC?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Myphoto" />
        </div>
      </div>
    </section>
  )
}