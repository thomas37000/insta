import React from 'react';
import Home from './components/Home';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="divLogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            className="logo"
            alt="logo"
          />
        </div>
      </header>
      <Home />
      <Grid />
    </div>
  );
}

export default App;
