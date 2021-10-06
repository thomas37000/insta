import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardTextSlider from './CardText';

const CardSlider = ({ img, image, name }) => {
  return (
    <>
      <div className="slider-container">
        <div className="card-slider">
          <div className="CardImg">
            {/* <img src={image.url} alt={name} className="cards-image" /> */}
            <img src={img} alt={name} className="cards-slider-image" />
          </div>
          <CardTextSlider />
        </div>
      </div>
    </>
  );
};

CardSlider.propTypes = {
  img: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardSlider;
