import React from 'react';
import './curriculum.scss';

function Curriculum( props ) {

    const { extraClass, skills } = props;

    return (
        <div className={`cv-wrapper`}>
            <div className={`skills-wrapper-${extraClass}`}>
                <h1 className="skill-title"> Habilidades </h1>
                <ul className="skills-list">
                    {
                        (skills) && (
                            skills.map((s) => {
                                return <li className="skill" key={s}>{s}</li>
                            })
                        )
                    }
                    
                </ul>
            </div>
            <div className="cv">
                <p>Para mais informações recomendo baixar meu CV</p>
                <button className={`cv-download-${extraClass}`}>
                    <img src='./assets/images/download.svg' alt='baixar cv'/>
                    <span>Baixar CV</span>
                </button>
            </div>
        </div>
    );
}

export default Curriculum;