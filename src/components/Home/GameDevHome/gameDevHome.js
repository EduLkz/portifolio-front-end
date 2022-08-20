import React from 'react';
import './gameDevHome.scss'
import Curriculum from '../Information/Curriculum/curriculum';
import InfoPage from '../Information/InfoPage/infoPage';
import Games from '../Information/Games/games';
import Header from '../../Header/header';

const GameDevHome = ({ games }) => {

  const mySkills = [
    "Unity",
    "Blender",
    "UI",
    "Ads",
    "IAP"
  ]

  return (
    <div className="game-dev">
        <Header nextPage='Front End'/>
        <InfoPage/>
        <Curriculum extraClass="game" skills={mySkills}/>
        <Games games={games}/>
    </div>
  );
}

export default GameDevHome;