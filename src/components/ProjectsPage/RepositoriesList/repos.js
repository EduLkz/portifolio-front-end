import React from 'react';

const Repo = ({ name, html_url, description, created_at, language}) => {

  return (
    <div className='repo'>
        <div className='repo-info'>
            <p className='repo-title'><a href={html_url} target='_blank' rel="noreferrer">{name}</a></p>
            <p className='repo-description'>"{description}."</p>
            <div className='teste'>
              <p className='repo-published-at'>{created_at}</p>
              <p className='repo-language'>{language}</p>
            </div>
        </div>
    </div>
  );
}

export default Repo;