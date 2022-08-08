import React from 'react';
import Repo from './repos';
import './repositoriesList.css'

function RepositoriesList( {repos} ) {
    const reposList = repos;

    const RenderRepos = (repo) =>{
        return <Repo {...repo}/>
    }

    const r = [
        {
            name: 'Repository name',
            html_url: 'https://www.youtube.com/',
            description: 'repository teste',
            created_at: '01-01-2022',
            language: 'javascript'
        },
        {
            name: 'Repository No description',
            html_url: 'https://www.youtube.com/',
            created_at: '01-01-2022',
            language: 'typescript'
        }
    ]

    return (
        <div className='repo-list'>
            <Repo {...r[0]}/>
            
            {
                // r &&
                // (r.map((repo) => {
                //     return RenderRepos(repo);
                // }))
                
            }
        </div>
    );
}

export default RepositoriesList;