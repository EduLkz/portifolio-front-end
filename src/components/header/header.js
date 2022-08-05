import React, { useReducer, useState } from 'react';
import { pageAbout, pageGames, pageHome, pageProjects } from '../../Services/ActionTypes/page.types';
import './header.css'
// import { Container } from './styles';

const initialPage = {
  page: pageHome
};
function reducerFunction(state, action){
  switch (action.type) {
    case pageHome:
      return {
        ...state,
        page: pageHome
      }
      
    case pageGames:
      return {
        ...state,
        page: pageGames
      }
    case pageProjects:
      return {
        ...state,
        page: pageProjects
      }
    case pageAbout:
      return {
        ...state,
        page: pageAbout
      }
  
    default:
      break;
  }
}

function Header() {
  return (
    <div className='Header'>
        <nav>
            <li>
                <ul><button>Inicio</button></ul>
                <ul><button>Jogos</button></ul>
                <ul><button>Projetos</button></ul>
            </li>
        </nav>
    </div>
  )
}

export default Header;