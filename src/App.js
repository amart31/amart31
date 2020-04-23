import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './views/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route render={() => <h1>Not found!</h1>} />
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
