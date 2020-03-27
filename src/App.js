import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './views/Home';
import { Resume } from './views/Resume';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
      <Route render={() => <h1>Not found!</h1>} />
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
