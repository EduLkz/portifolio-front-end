import React, { useState } from 'react';
import './projectsPage.css';
import GameList from './GameList/gameList';
import RepositoriesList from './RepositoriesList/repositoriesList';
import StudyList from './StudyList/studyList';
import UserInfo from './UserInfo/userInfo';

const ProjectsPage = ( props ) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [navClassName, setNavClassName] = useState('nav-games');
    const apiData = props.data;

    return (
        <div className="projects">
            {<UserInfo {...apiData}/>}
            <nav className={`proj-nav ${navClassName}`}>
                <ul>
                    <li><button onClick={() => {
                        setPageIndex(0);
                        setNavClassName('nav-games');
                    }}>Games</button></li>
                    <li><button onClick={() => {
                        setPageIndex(1)
                        setNavClassName('nav-repos');
                    }}>Repositorios</button></li>
                    <li><button onClick={() => {
                        setPageIndex(2)
                        setNavClassName('nav-studies');
                    }}>Estudos</button></li>
                </ul>
            </nav>

            <div className="project-wrapper">
                <Pages page={pageIndex} data={apiData}/>
            </div>
        </div>
    );
}

const Pages = (props) =>{
    const { page, data } = props;
    switch(page){    
        default:
        case 0:
            return <GameList { ...data }/>; //Formação
        case 1:
            return <RepositoriesList { ...data }/>; //Experiencia
        case 2:
            return <StudyList { ...data }/>
    }
  }

export default ProjectsPage;