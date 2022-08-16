import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className="education">
        <EducationCard course='Informatica' institution='Instituto Técnico de Barueri' type='Ensino Médio/Técnico' date='2012 - 2014'/>
        <EducationCard course='Jogos Digitais' institution='Fatec Carapicuíba ' type='Tecnologo' date='2016 - 2020'/>
    </div>
  );
}

const EducationCard = (props) => {
    const { course, institution, type, date} = props

    return(
        <div className="education-card">
            <div>
                <p className='course'>{course}</p>
                <p className="institution">{institution}</p>
            </div>
            <div>
                <p className="info">
                    <span className="type">{type}</span>&emsp;
                    <span className="date">{date}</span>
                </p>
                <p>
                    <a  target='_blank'  rel="noreferrer" href='http://www.fateccarapicuiba.edu.br/wp-content/uploads/2019/05/Jogos-Digitais_CA_2013-CESU.pdf'>
                    Saiba mais...
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Education;