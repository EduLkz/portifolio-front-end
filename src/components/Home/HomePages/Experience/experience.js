import React from 'react';
import './experience.css'

const Experience = () => {
    const resp = [
        [
            'Programador de gameplay',
            'Programador de interface de usuário',
            'Implementação de Propagandas e compras In-App',
            'Conexão com Banco de dados',
            'Conexão com Redes Sociais'
        ]
    ]

    return (
        <div className="experience">
            <ExperienceCard company='Caraca Creators Games' role='Programmer' start='09/2018' end='02/2019' responsabilities={resp[0]} id='01'/>
        </div>
    );
}

const ExperienceCard = (props) => {
    const { company, role, start, end, responsabilities} = props

    return(
        <div className="experience-card">
            <p className="date">{start} - {end}</p>

            <div className='role-info'>
                <p className='role-description'> 
                    <span className="company">{company}</span> - 
                    <span className="role"> {role}</span>
                </p>


                <ul className="resp">
                    {responsabilities.map((r) =>{
                        return <li key={responsabilities.indexOf(r)}>{r}</li>
                    })}
                </ul>

            </div>
                

            
        </div>
    )
}

export default Experience;