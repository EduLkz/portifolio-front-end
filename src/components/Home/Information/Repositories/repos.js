import React from 'react';
import Repo from './repo';
import './repos.scss';

const Repos = ( props ) => {
    
    const repolist = props.repos;

    return (
        <div className="repos-wrapper">
            <h1>PROJETOS</h1>
            <div className="repo-list">
                {
                    repolist &&
                    (repolist.map((r) => {
                        return <Repo repo={r} key={`repo${r.id}`} />
                    }))
                }
            </div>
        </div>   
    )
}

export default Repos;