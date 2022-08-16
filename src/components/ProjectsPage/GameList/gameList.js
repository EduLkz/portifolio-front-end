import React from 'react';
import Game from './game';
import './gameList.css'

function GameList( {games} ) {
    const gameList = games;

    const RenderGames = (game) =>{
        return <Game {...game} key={game.title}/>
    }

    return (
        <div className="games">
            <div className='game-list'>
                {
                    gameList &&
                    (gameList.map((game) => {
                        return RenderGames(game);
                    }))
                    
                }
            </div>
        </div>
    );
}

export default GameList;