import React from 'react';
import Home from './components/Home';
import Grid from './components/Grid/Grid';
import Nav from './components/Nav/Nav';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <Home />
      <Grid />
    </div>
  );
}

export default App;
