import React from 'react'
import './navbar.scss';
export const Navbar = () => {
    return (
        <div className='container-navbar'>
            <div className='container-navbar__listMenu'>
                <ul>
                    <li>INICIO</li>
                    <hr/>
                    <li>ACERCA DE MI</li>
                    <hr/>
                    <li>ESTUDIOS Y EXPERIENCIAS</li>
                    <hr/>
                    <li>PROYECTOS</li>
                    <hr/>
                    <li>TECNOLOGÍAS Y METODOLOGÍAS</li>
                    <hr/>
                    <li>PASATIEMPOS</li>
                    <hr/>
                    <li>CONTACTO</li>
                </ul>
            </div>
        </div>
    )
}
