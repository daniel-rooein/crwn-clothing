import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
