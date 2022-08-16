import './App.css';

import { useEffect, useState } from 'react';
import { getAPIdata } from '../../Services/api/api';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../Header/header';
import Home from '../Home/home';
import GameList from '../GameList/gameList';
import RepositoriesList from '../RepositoriesList/repositoriesList';


function App() {

  const [apiData, setApiData] = useState();

  const waitForApi = async() => {
    if(!apiData){
      const apireturn = await getAPIdata();
      setApiData(apireturn);
    }
  }

  useEffect(() => {
    //waitForApi();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>

        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route path='/games'>
              {(apiData) && (
                <GameList {...apiData}/>
              )}
            </Route>
            <Route path='/repositories'>
              <RepositoriesList/>
              {/* {(apiData) && (
                <RepositoriesList {...apiData}/>
              )} */}
            </Route>
          </Switch>
          
        </div>

        
      </div>
    </Router>
  );
}

export default App;
