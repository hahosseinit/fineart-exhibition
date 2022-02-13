import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h>
            Hats Page
        </h>
    </div>
)

function App() {
  return (
    <div>
      {/*  switch does not load anything else but that route*/}
      <Switch>
          <Route exact path='/' component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
