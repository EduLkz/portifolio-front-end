import React from 'react';
import './frontEndHome.scss'
import Curriculum from '../Information/Curriculum/curriculum';
import InfoPage from '../Information/InfoPage/infoPage';
import Repos from '../Information/Repositories/repos';
import Header from '../../Header/header';

const FrontEndHome = ({ repos }) => {

  const mySkills = [
    "Html/Css",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "ReactJs",
    "React Native",
    "NodeJS",
    "Firebase",
    "SASS"
  ]

  return (
    <div className="front-end">
        <Header nextPage='Game Dev'/>
        <InfoPage/>
        <Curriculum extraClass="front" skills={mySkills}/>
        <Repos repos={repos}/>
    </div>
  );
}

export default FrontEndHome;