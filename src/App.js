import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import BasketContextProvider from './contexts/BasketContext';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <BasketContextProvider>
              <Header />
              <Checkout />
            </BasketContextProvider>
          </Route>
          <Route path="/">
            <BasketContextProvider>
              <Header />
              <Home />
            </BasketContextProvider>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
