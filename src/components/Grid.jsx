import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Grid.css';
import Card from './Card';

const Grid = () => {
  const [instas, setInstas] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
      )
      .then((res) => {
        console.log(res.data);
        setInstas(res.data);
      });
  }, []);

  const fetchApi =
    instas.length > 0 &&
    instas.map((insta, id) => {
      return <Card key={id} insta={insta} />;
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
