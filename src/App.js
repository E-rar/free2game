import './Sass/App.scss';
import Home from './components/Home';
import Recently from './components/Recently'
import AllGames from './components/AllGames'
import Sidebar from './components/Sidebar'
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import DetailCard from './components/DetailCard';



function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/home" exact>
            <Home>

            </Home>
          </Route>
          <Route path="/all" exact>
            <AllGames>

            </AllGames>
          </Route>
          <Route path="/recent" exact>
            <Recently/>
          </Route>
          <Route path="/all/:id" exact component={DetailCard}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;