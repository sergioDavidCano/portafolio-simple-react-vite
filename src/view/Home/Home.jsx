import React from 'react';
import './home.scss';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { StudiesExperiencia } from '../../components/studiesExperience/StudiesExperiencia';
import { Technologies } from '../../components/Technologies/Technologies';

export const Home = () => {
    return (
        <div className='container-root'>
            <div className='container-root__main'>
                <div className='container-root__main__navbar'>
                    <Navbar />
                </div>
                <div className='container-root__main__home'>
                    <Header />
                    <main>
                        <div className='container-body'>
                            <Hero />
                            <StudiesExperiencia />
                            <Technologies/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}