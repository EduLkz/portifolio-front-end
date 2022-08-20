import React from 'react';
import { useLocation } from 'react-router-dom';
import './infoPage.scss';

function InfoPage() {
    const socials = {
        github: 'https://github.com/EduLkz/',
        linkedin: 'https://www.linkedin.com/in/eduardo-almeida-rocha-60832aba/',
        instagram: 'https://www.instagram.com/edulkz/',
        email: 'mailto:edu_a.r@hotmail.com?subject=Contato Portifolio'
    }

    const location = useLocation().pathname;

    const pfpSource = (location === '/frontend') ? '/assets/images/profile.jpg' : '/assets/images/profile-game.png'

    return(
        <div className="info-page">
            
            <div className="about-me-wrapper">
                <p className="about-me">
                    <div className="presentation">
                        <span>Olá, me chamo </span>
                        
                        <h1 className={`name-${location.replace('/', '')}`}> Eduardo Almeida Rocha</h1> 
                        
                        <p>
                        Seja bem-vindo ao meu portfólio. 
                        Aqui estão informações do meu currículo e exibição dos meus principais projetos. 
                        Caso tenha interesse em conhecer todo o meu trabalho, visite minha pagina do <a href={socials.github} target='_blank' rel="noreferrer">GitHub</a>.
                        </p>
                    </div>
                    <ul className='social'>
                        <a href={socials.github} target='_blank' rel="noreferrer">
                            <li>
                                <img src='./assets/images/github.svg' alt='github icon'/>
                            </li>
                        </a>
                        <a href={socials.linkedin} target='_blank' rel="noreferrer">
                            <li>
                                <img src='/assets/images/linkedin.svg' alt='linkedin icon'/>
                            </li>
                        </a>
                        <a href={socials.instagram} target='_blank' rel="noreferrer">
                            <li>
                                <img src='/assets/images/instagram.svg' alt='instagram icon'/>
                            </li>
                        </a>
                    </ul>
                </p>
                <img src={pfpSource} alt='eduardo profile pic' className='pfp'/>
            </div>
        </div>
    );
}

export default InfoPage;