import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardSlider from '../Card/CardSlider';
import Grid from '../Grid/Grid';

const Routter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:profil" component={Grid} />
        {/* url /p/ = posts */}
        <Route path="/p/:id" component={CardSlider} />
      </Switch>
    </Router>
  );
};

export default Routter;
