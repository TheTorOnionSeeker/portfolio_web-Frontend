import logo from './1985052.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click on my name to see more about me.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guillermo Oscar Núñez
        </a>
      </header>
    </div>
  );
}

export default App;
