import './App.css';
import Header from '../header/header';
import GameList from '../GameList/gameList';
import { useEffect, useState } from 'react';
import { getAPIdata } from '../../Services/api/api';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
            <Route exact path='/'><h1>HOME</h1></Route>
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
