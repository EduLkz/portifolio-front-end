import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
        <nav>
            <li>
                <ul><Link to='/' className='router-link'>Inicio</Link></ul>
                <ul><Link to='/games' className='router-link'>Jogos</Link></ul>
                <ul><Link to='/repositories' className='router-link'>Repositorios</Link></ul>
            </li>
        </nav>
    </div>
  )
}

export default Header;