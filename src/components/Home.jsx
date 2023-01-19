import React, { useState } from 'react';
import logo from '../1985052.svg';
import '../App.css';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click on my name to see more about me.
          </p>
          <Link className="App-link" to={"/details"}>Guillermo Oscar Núñez</Link>
        </header>
      </div>
    </>
  )
}
