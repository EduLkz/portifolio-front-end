import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getData } from '../../Services/Data/getData';
import FrontEndHome from '../Home/FrontEndHome/frontEndHome';
import GameDevHome from '../Home/GameDevHome/gameDevHome';
import SelectSection from '../Home/selectSection';

function App() {

  const [jsonData, setJsonData] = useState(getData());

  useEffect(() => {
    const waitForData = () => {
      if(!jsonData){
        const jsonreturn = getData();
        setJsonData(jsonreturn);
      }
    }

    waitForData();
  }, [jsonData])

  return (
    <Router>
      {console.log(typeof section)}
      <div className="App">
        <Switch>
          <Route exact path='/'><SelectSection/></Route>
          <Route exact path='/frontend'><FrontEndHome {...jsonData}/></Route>
          <Route exact path='/gamedev'><GameDevHome {...jsonData}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
