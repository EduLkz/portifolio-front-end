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
              &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ornare sem, sed egestas urna. 
              Sed tristique sem eu erat placerat, vitae lacinia dolor convallis. Proin dictum augue augue, 
              nec hendrerit ipsum cursus in. Nam non risus sed massa pellentesque sollicitudin in id quam. 
              Ut molestie nunc eget auctor tempus. Phasellus ac sem arcu. Curabitur eu tincidunt metus. 
              Integer tincidunt neque nunc, nec sodales erat facilisis sed. Nulla sed aliquam elit.
          </p>
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

          <Pages page = {pageIndex}/>

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