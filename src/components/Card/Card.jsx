import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ img, name }) => {
  // setTimeout(() => {
  //   loadImages;
  // }, 2000);

  // function loadImages() {
  //   const image = document.querySelector('.cards-image');
  //   image.innerHTML = `<img src={img} alt={name} className="cards-image loading" />`;
  //   image.classList.remove('.loading');
  // }

  return (
    <div className="Card">
      <div className="CardImg">
      <img src={img} alt={name} className="cards-image" />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
