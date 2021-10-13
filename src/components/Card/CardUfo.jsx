/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function CardUfo({ id, image, name }) {
  return (
    <>
      <div className="Card">
        <div className="CardImg">
          <img src={image} alt={name} className="cards-image" />
        </div>
      </div>
    </>
  );
}

CardUfo.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
