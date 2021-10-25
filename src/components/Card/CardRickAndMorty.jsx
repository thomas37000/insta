import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardRickAndMorty = ({ image, name }) => {
  return (
    <div className="Card">
      <div className="CardImg">
        <img src={image} alt={name} className="cards-image" />
      </div>
    </div>
  );
};

CardRickAndMorty.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardRickAndMorty;
