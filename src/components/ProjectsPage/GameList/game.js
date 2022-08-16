import React from 'react';

const Game = ({ title, url, cover_url, short_text, published_at, has_repository, repository_url}) => {

  return (
    <div className='game'>
        <img className='game-cover' src={cover_url} alt={`${title} cover`}/>
        <div className='game-info'>
            <a href={url} target='_blank' rel="noreferrer">
              <p className='game-title'>{title}</p>
            </a>
            <div className="extra-info">
              <p className='game-description'>{short_text}</p>
              <p className='game-published-at'>{published_at}</p>
            </div>
            {
              has_repository  && (
              <a href={repository_url} target='_blank' rel="noreferrer" className='repo-link'>
                <img src='/images/github.svg' alt='github icon'/>
              </a>
              )
            }
            
        </div>
    </div>
  );
}

export default Game;