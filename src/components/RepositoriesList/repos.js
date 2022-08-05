import React from 'react';

const Repo = ({ name, html_url, description,created_at, language}) => {

  return (
    <div className='repo'>
        <div className='repo-info'>
            <p className='repo-title'>{name}</p>
            {description.length > 0 & (
                <p className='repo-description'>{description}</p>
            )}
            <p className='repo-published-at'>{created_at}</p>
            <button href={html_url} target='_blank'>Visitar Repositorio</button>
        </div>
    </div>
  );
}

export default Repo;