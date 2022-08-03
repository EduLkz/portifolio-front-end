import React from 'react';

const Game = ({ title, cover_url, short_text, published_at, url }) => {

  return (
    <div className='game'>
        {console.log({title})}
        <img className='game-cover' src={cover_url} alt={`${title} cover image`}/>
        <div className='game-info'>
            <p className='game-title'>{title}</p>
            <p className='game-description'>{short_text}</p>
            <p className='game-published-at'>{published_at}</p>
            <a href={url} target='_blank'>I</a>
        </div>
    </div>
  );
}

export default Game;