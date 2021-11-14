import moment from 'moment';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//filter: name
//filter: episode
import logo from './logo.svg';
import './App.css';
import EpisodeList from './components/EpisodeList'
import Episode from './components/Episode'
import CharacterList from '../../../src/components/CharacterList';
import './Components/Homepage';
import Homepage from './Components/Homepage';

function App(){
  return (
      <BrowserRouter>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/Components/Homepage.js" > Home </Link>
                      </li>
                  </ul>
              </nav>
          </div>
          <div>
            <Navbar/>
            <Homepage/>
          </div>
          <Switch>
              <Route path="/Episode/:id">
                  <Episode/>
              </Route>
              <Route path="/episodes">
                  <EpisodeList />
              </Route>
              <Route path= "/characterList/:id">
                  <CharacterList/>
              </Route>
          </Switch>
      </BrowserRouter>
  );

}


export default App;
