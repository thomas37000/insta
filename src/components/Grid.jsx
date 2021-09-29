import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Grid.css';
import Card from './Card';

const Grid = () => {
  const [instas, setInstas] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('useEffect', data);
        setInstas(data.instagram);
      });
  }, []);

  const fetchApi =
    instas.length > 0 &&
    instas.map((insta, i) => {
      return <Card key={i} {...insta} />;
    });

  return (
    <div>
      <div className="container">
        <div className="box">{fetchApi}</div>
      </div>
    </div>
  );
};

Grid.propTypes = {};

export default Grid;
