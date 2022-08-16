import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
        <nav>
            <li>
                <ul><Link to='/' className='router-link'>Inicio</Link></ul>
                <ul><Link to='/projects' className='router-link'>Projetos</Link></ul>
            </li>
        </nav>
    </div>
  )
}

export default Header;