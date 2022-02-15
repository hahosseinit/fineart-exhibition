import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

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
          <Route exact path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
