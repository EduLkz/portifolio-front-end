import React from 'react';
import Game from './game';
import './games.scss';

const Games = ( props ) => {
    
    const gamelist = props.games;

    return (
        <div className="games-wrapper">
            <h1>PROJETOS</h1>
            <div className="game-list">
                {
                    gamelist &&
                    (gamelist.map((g) => {
                        return <Game game={g} key={`game${g.id}`} />
                    }))
                }
            </div>
        </div>   
    )
}

export default Games;