import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

const Header = ( props ) => {

  const nextPage = props.nextPage;
  
  function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='header'>
        <nav>
            <ul>
                <Link to='/' className='router-link' onClick={() => {scrollToTop()}}>
                  <li>Voltar</li>
                </Link>
                <Link to={`/${nextPage.toLowerCase().replace(' ', '')}`} className='router-link' onClick={() => {scrollToTop()}}>
                  <li>{nextPage}</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header;