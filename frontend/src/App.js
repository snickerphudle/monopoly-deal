import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby';
import Game from './components/Game';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/lobby" component={Lobby} />
        <Route path="/game/:id" component={Game} />
      </Switch>
    </Router>
  );
};

export default App;
