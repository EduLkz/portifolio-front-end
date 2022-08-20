import React from 'react';

const Game = ( props ) => {
    
    const { title, url, cover_url, short_text, has_repository, repository_url } = props.game;

    return (
        <div className="game">
            <a href={url} className="game-link" target='_blank' rel='noreferrer'>
                <img src={cover_url} alt="gamecover" className="cover" />
            </a>
            <div className="info">
                <a href={url} target='_blank' rel='noreferrer'>
                    <p className="title"> {title} </p>
                </a>
                <p className="description">{short_text}.</p>

                {has_repository && (
                    <a href={repository_url} target='_blank' rel='noreferrer' className='git-code'>
                        <img src='./assets/images/code.svg' alt='view code'/>
                    </a>
                )}
            </div>
        </div>   
    )
}

export default Game;