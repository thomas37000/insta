import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardDogs = ({ image, name }) => {
  return (
    <div className="Card">
      <div className="CardImg">
        <img src={image.url} alt={name} className="cards-image" />
      </div>
    </div>
  );
};

CardDogs.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardDogs;
