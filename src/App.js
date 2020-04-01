import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
  console.log()
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>        
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
