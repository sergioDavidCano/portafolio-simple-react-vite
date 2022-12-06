import React from 'react';
import './home.scss';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';

export const Home = () => {
    return (
        <div className='container-root'>
            <div className='container-root__main'>
                <div className='container-root__main__navbar'>
                    <Navbar />
                </div>
                <div className='container-root__main__home'>
                    <Header/>
                    {/* <Hero /> */}
                    <main>
                        <div className='container-hero'>
                            <Hero/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}