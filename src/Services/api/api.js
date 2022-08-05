import { API_ADDRES } from '../../settings/settings';

var apidata;
var user;
var games;
var repos;


const getAPIdata = async() => {
    if(!apidata){
        const response = await fetch(`${API_ADDRES}/portifolio`, {
            method: 'GET'
        })
        
        const data = await response.json();
        
        apidata = await data;
        user = await data.user;
        games = await data.games;
        repos = await data.repos;
    
        return apidata;
    }
}


const getUserData = () => {
    if(user){
        return user;
    }
}

const getGamesData = () => {
    if(games){
        return games;
    }
}

const getReposData = () => {
    if(repos){
        return repos;
    }
}

export { getAPIdata, getUserData, getGamesData, getReposData }