import React, { useEffect, useState } from 'react';
import Game from './game';
import './gameList.css'
import list from '../../my-games.json'

function GameList() {

    const [gameList, setGameList] = useState(list.games);

    // const getGameList = async() => {
    //     const response = await fetch('http://localhost:5000/get-games', {
    //         method: 'GET'
    //     })
        
    //     const data = await response.json();
    //     setGameList(data.games)
    //     console.log(gameList);
    //     return data;
    // }

    // useEffect(() => {
    //     getGameList();
    // }, [])

    const RenderGames = (game) =>{
        return <Game {...game}/>
    }

    return (
        <div className='game-list'>
            {console.log(gameList)}
            {   
                gameList.map((game) => {
                    return RenderGames(game);
                })  
            }
        </div>
    );
}

export default GameList;