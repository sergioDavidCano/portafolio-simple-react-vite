import React from 'react'
import './header.scss';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="container-header">
                    <div className="container-socials">
                        <ul className="socials__ul">
                            <li className="socials__ul__li">
                                <a href="https://www.facebook.com/leoomorello/" rel="noreferrer" target="_blank">
                                    <FaFacebook className="socials__ul__li__icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li className="socials__ul__li">
                                <a href="https://www.instagram.com/leaa_morello/" rel="noreferrer" target="_blank">
                                    <RiInstagramFill className="socials__ul__li__icon instagram" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li className="socials__ul__li">
                                <a href="https://www.linkedin.com/in/leandro-morello" rel="noreferrer" target="_blank">
                                    <FaLinkedin className="socials__ul__li__icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li className="socials__ul__li">
                                <a href="https://github.com/Lean97-start" rel="noreferrer" target="_blank">
                                    <FaGithub className="socials__ul__li__icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img className="container-img" src="src/assets/header.jpg" alt="Cover_page" />
                    <div className="container-text">
                        <p className='container-text__1' >¡Hola! soy</p>
                        <p className='container-text__2' >Sergio cano </p>
                        <p className='container-text__3' >Programador de software</p>
                    </div>
                </div>
            </div>
        </header>
    )
}