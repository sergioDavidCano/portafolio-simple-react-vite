import React from 'react';
import './home.scss';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/Navbar';

export const Home = () => {
    return (
        <div className='container-root'>
            <div className='container-root__main'>
                <div className='container-root__main__navbar'>
                    <Navbar />
                </div>
                <div className='container-root__main__home'>
                    <Hero />
                </div>
            </div>
        </div>
    )
}