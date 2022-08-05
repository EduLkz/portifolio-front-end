import React from 'react';
import Repo from './repos';
import './repositoriesList.css'

function RepositoriesList( {repos} ) {
    const reposList = repos;

    const RenderRepos = (repo) =>{
        return <Repo {...repo}/>
    }

    return (
        <div className='repo-list'>
            {
                reposList &&
                (reposList.map((repo) => {
                    return RenderRepos(repo);
                }))
                
            }
        </div>
    );
}

export default RepositoriesList;