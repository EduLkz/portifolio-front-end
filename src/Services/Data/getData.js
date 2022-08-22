import DefaultResponse from '../../settings/portfolioInfo.json'

var jsonData = DefaultResponse;
var responseFromApi = false;

function getData(){
    return jsonData;
}


function getRepos (){
    if(!responseFromApi.repos){
        getData();
    }
    
    return responseFromApi.repos;
}


export { getData, getRepos}