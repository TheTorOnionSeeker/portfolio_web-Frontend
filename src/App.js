import React, { useState } from 'react';
import './App.css';
import { Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <>
    <Route exact path={"/"} component={Home} />
    <Route path={"/details"} component={Details} />
    </>
  );
}

export default App;
