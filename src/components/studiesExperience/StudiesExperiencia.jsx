import React from 'react';
import './studiesExperiencia.scss';

export const StudiesExperiencia = () => {
    return (
        <section id="skills" className="seccion-studies-experiencia">
            <div className="container-section">
                <div className="container-studies">
                    <h2 className="container-studies__title">Estudios</h2>
                    <hr />
                    <font className="container-studies__title-font">
                        <h3 className="container-studies__title-font__h3" >Ingeniería en sistemas de información</h3>
                        <span className="container-studies__title-font__time" >Marzo 2017 - En curso</span>
                    </font>
                    <p className="container-studies__title__description">Actualmente estudio en la Universidad Tecnológica Nacional y tengo hasta cuarto año de la carrera realizada, la cual sigo en curso.</p>
                    <hr />
                    <font className="container-studies__title-font">
                        <h3 className="container-studies__title-font__h3">Desarrollador Web Full Stack</h3>
                        <span className="container-studies__title-font__time"> Enero 2022 - Mayo 2022</span>
                    </font>
                    <p className="container-studies__title__description">Me recibí de Full Stack Web Developer en la academia "Soy Henry". Fue un curso intensivo de 4 meses en los cuales tuve mucha experiencia en grupos y desarrollo de proyectos</p>
                </div>
                <hr className="SkillsWorkExperience_separatorDIV__J4p71" />
                <div className="container-studies">
                    <h2 className="container-studies__title">Experiencias</h2>
                    <hr />
                    <font className="container-studies__title-font">
                        <h3 className="container-studies__title-font__h3" >Pasantías en DySI</h3>
                        <span className="container-studies__title-font__time">Diciembre 2018 - Marzo 2019</span>
                        <hr />
                        <h3 className="container-studies__title-font__h3" >Proy. Facultativo de Tercer Año</h3> Agosto 2020
                        <span className="container-studies__title-font__time">- Noviembre 2020</span>
                        <hr />
                        <h3 className="container-studies__title-font__h3" >Proy. Individual en Soy Henry - Oh la la!</h3> Abril 2022
                        <span className="container-studies__title-font__time">- Mayo 2022</span>
                        <hr />
                        <h3 className="container-studies__title-font__h3" >Proy. Grupal en Soy Henry - Bragi</h3> Mayo 2020
                        <span className="container-studies__title-font__time">- Mayo 2020</span>
                    </font>
                </div>
            </div>
        </section>
    )
}