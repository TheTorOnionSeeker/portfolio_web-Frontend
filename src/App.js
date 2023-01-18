import React, { useState } from 'react';
import './App.css';
import { Route,Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Route exact path={"/"} component={Home} />
    </>
  );
}

export default App;
