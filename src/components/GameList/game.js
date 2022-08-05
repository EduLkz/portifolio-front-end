import React from 'react';

const Game = ({ title, url, cover_url, short_text, published_at, has_repository, repository_url}) => {

  return (
    <div className='game'>
        <img className='game-cover' src={cover_url} alt={`${title} cover image`}/>
        <div className='game-info'>
            <p className='game-title'>{title}</p>
            <p className='game-description'>{short_text}</p>
            <p className='game-published-at'>{published_at}</p>
            <button href={url} target='_blank'>Visitar Pagina</button>
            {
              has_repository  && (<button href={repository_url} target='_blank'>Repositorio Git</button>)
            }
        </div>
    </div>
  );
}

export default Game;