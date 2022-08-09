import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
        <nav>
            <li>
                <ul><Link to='/'>Inicio</Link></ul>
                <ul><Link to='/games'>Jogos</Link></ul>
                <ul><Link to='/repositories'>Repositorios</Link></ul>
            </li>
        </nav>
    </div>
  )
}

export default Header;