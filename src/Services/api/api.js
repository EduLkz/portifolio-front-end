import { API_ADDRES } from '../../settings/settings';
import DefaultResponse from '../../settings/deafultApi.json'

var apidata = DefaultResponse;
var responseFromApi = false;

const getAPIdata = async(timeoutDuration) => {
    if(responseFromApi === false){
        let response;
        try{
            response = await fetch(`${API_ADDRES}/portifolio`, {
                method: 'GET',
                timeout: {timeoutDuration}
            })

            const data = await response.json();
            
            apidata = data;
            responseFromApi = true;
        }catch(e){
            console.error('Error trying to get api: ' + e + '\nSending default response');
        }

        return apidata;
    }
}

const getResponseFromApi = () => {
    return responseFromApi;
}

const getDefaultResponse = () => {
    return DefaultResponse;
}

export { getAPIdata, getResponseFromApi, getDefaultResponse }