import React from 'react';
import { useState } from 'react';
import Education from './HomePages/Education/education';
import './home.css'
import CertificatesList from './HomePages/CertificatesList/certificatesList';
import Softwares from './HomePages/Software/softwares';
import MainSkills from './HomePages/MainSkills/mainSkills';
import Experience from './HomePages/Experience/experience';

function Home() {

  const [pageIndex, setPageIndex] = useState(0);
  
  return (
    <div className="home">
      <div className="my-info">
          <h1>EDUARDO ALMEIDA ROCHA</h1>
          <img src='images/profile.jpg' alt='eduardo profile pic' className='pfp'/>
          <p className="about-me">
              &emsp; OLÁ, me chamo Eduardo e seja bem vindo ao meu portifolio. Aqui possui informações do meu curriculo 
              e exibição de alguns projetos, não serão todos os projetos exibidos, apenas os que acho validos,
              caso tenha interesse em ver todos os projetos, visite minha pagina do <a href='https://github.com/EduLkz/' target='_blank' rel="noreferrer">GitHub</a>.
          </p>

          <ul className='social'>
            <li><img src='/images/github.svg' alt='github icon'/></li>
            <li><img src='/images/linkedin.svg' alt='linkedin icon'/></li>
            <li><img src='/images/instagram.svg' alt='instagram icon'/></li>
            <li><img src='/images/mail.svg' alt='email icon'/></li>
          </ul>
        </div>

        <div className="info-page">
          
          <nav className='home-nav'>
            <ul>
              <li><button onClick={() => setPageIndex(0)}>Formação</button></li>
              <li><button onClick={() => setPageIndex(1)}>Experiencia</button></li>
              <li><button onClick={() => setPageIndex(2)}>Habilidades</button></li>
              <li><button onClick={() => setPageIndex(3)}>Softwares</button></li>
              <li><button onClick={() => setPageIndex(4)}>Certicados</button></li>
            </ul>
          </nav>

          <div className='pages'>
            <Pages page = {pageIndex}/>
          </div>

        </div>
        
    </div>
  );
}


const Pages = (props) =>{
  const { page } = props;
  switch(page){    
    default:
    case 0:
      return <Education/>; //Formação
    case 1:
      return <Experience/>; //Experiencia
    case 2:
      return <MainSkills/>;
    case 3:
      return <Softwares/>;
    case 4:
      return <CertificatesList/>;
  }
}

export default Home;