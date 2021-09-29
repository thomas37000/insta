import React from 'react';
import PropTypes from 'prop-types';

const Card = (insta) => {
  const { img, name } = insta;
  return (
    <div className="Card">
      <div className="CardImg">
        <img src={insta.img} alt={insta.name} />
      </div>
      <div className="name">{insta.name}</div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
