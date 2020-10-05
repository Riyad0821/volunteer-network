import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="body">
      {/* <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router> */}
      <Profile></Profile>
    </div>
  );
}

export default App;
