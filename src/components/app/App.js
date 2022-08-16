import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAPIdata, getDefaultResponse } from '../../Services/api/api';

import Header from '../Header/header';
import Home from '../Home/home';
import ProjectsPage from '../ProjectsPage/projectsPage';


function App() {

  const [apiData, setApiData] = useState(getDefaultResponse);

  

  useEffect(() => {
    const waitForApi = async() => {
      if(!apiData){
        const apireturn = await getAPIdata(5000);
        setApiData(apireturn);
      }
    }
    
    waitForApi();
  }, [apiData])

  return (
    <Router>
      <div className="App">
        <Header/>

        <div className='content'>
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route path='/projects'> <ProjectsPage data={apiData}/> </Route>
          </Switch>
          
        </div>

        
      </div>
    </Router>
  );
}

export default App;
