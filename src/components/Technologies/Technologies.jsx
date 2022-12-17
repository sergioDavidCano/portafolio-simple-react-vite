import './technologies.scss';
import React from 'react'

export const Technologies = () => {
    let technologies = [
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'Expresar',
            icon: 'Expresar',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
        {
            name: 'NodeJS',
            icon: 'NodeJS',
        },
    ];
    return (
        <section id="technologies" className="section-technologies">
            <div className="container-technologies">
                <br />
                <h2 className="container-technologies__title">Tecnologías</h2>
                <div className="container-technologies-info">
                    <div className='container-technologies-info__div'>
                        <p>
                            <span>- JavaScript</span>
                            <span className="Technologies_spanGral__03w8l">- NodeJS</span>
                            <span className="Technologies_spanGral__03w8l">-Expresar</span>
                            <span className="Technologies_spanStart__BUIjS">-Reaccionar</span>
                            <span className="Technologies_spanGral__03w8l">-Redux</span>
                            <span className="Technologies_spanGral__03w8l">-.HTML</span>
                            <span className="Technologies_spanStart__BUIjS">-.CSS</span>
                            <span className="Technologies_spanGral__03w8l">- PostgreSQL</span>
                            <span className="Technologies_spanGral__03w8l">- Secuela</span>
                            <span className="Technologies_spanStart__BUIjS">-.SQL</span>
                            <span className="Technologies_spanGral__03w8l">-Java</span>
                            <span className="Technologies_spanGral__03w8l">-Pitón</span>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}