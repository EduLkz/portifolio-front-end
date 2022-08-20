import React from 'react';
import { Link } from 'react-router-dom';
import './selectSection.scss';

function SelectSection() {

  return (
    <div className="selectSection">    
      <Link className="button-section front-end-section" to='frontend'>
        <p>FRONT-END</p>
      </Link>
      <Link className="button-section game-dev-section" to='gamedev'>
        <p>GAME DEV</p>
      </Link>
    </div>
  );
}



export default SelectSection;