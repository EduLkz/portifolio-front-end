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
  
  const [page, setPage] = useState('home');
  const [state, dispatch] = useReducer(reducerFunction, initialPage);
  
  return (
    <div className='Header'>
        <nav>
            <li>
                <ul><button onClick={() => {dispatch({type: pageHome})}}>Inicio</button></ul>
                <ul><button onClick={() => {dispatch({type: pageGames})}}>Jogos</button></ul>
                <ul><button onClick={() => {dispatch({type: pageProjects})}}>Projetos</button></ul>
                <ul><button onClick={() => {dispatch({type: pageAbout})}}>Sobre</button></ul>
            </li>
        </nav>
    </div>
  )
}

export default Header;