import React, { useEffect, useContext, useState } from 'react';
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
import SignIn from './components/auth/signIn/SignIn';
import { AuthContext } from './contexts/AuthContext';
import { auth } from './config'

const App = () => {

  const { dispatch } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: 'USER_LOGGED_IN', user })
      } else {
        dispatch({ type: 'USER_LOGGED_OUT', user: null })
      }
      setLoading(false)
    })
  }, [dispatch])

  return (
    <div className="app">
      {loading === false ? <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
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
      </Router> : null}
    </div>
  );
}

export default App;
