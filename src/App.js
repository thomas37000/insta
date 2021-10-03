import React from 'react';
import Home from './components/Home';
import Grid from './components/Grid';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Grid />
    </div>
  );
}

export default App;
