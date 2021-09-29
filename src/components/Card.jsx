import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img, name }) => {
  return (
    <div className="Card">
      <img src="https://i.imgflip.com/5olrz8.jpg" alt={name} />
      <div className="CardImg">
        <img src={img} alt={name} />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
