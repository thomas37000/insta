import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardTextSlider = ({ img, name }) => {
  const [username, setUsername] = useState('cool-cat');

  // const [instas, setInstas] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log('useEffect', data);
  //       setInstas(data.instagram);
  //     });
  // }, []);

  // const fetchHeader =
  //   instas.length > 0 &&
  //   instas.map((insta, i) => {
  //     return (
  //       <div className="card-header-text" key={i}>
  //         <img src={img} alt={name} className="cards-image" />
  //       </div>
  //     );
  //     // return <Card key={i} {...insta} />;
  //   });

  return (
    <>
      <div className="card-text">
        <div className="card-header-text">{username}  </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum commodi
        eveniet eos veritatis ipsam animi adipisci rem iusto alias voluptas, est
        eius deserunt modi recusandae nam, maiores voluptatum tenetur?
        Voluptatem.
      </div>
    </>
  );
};

CardTextSlider.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profil: PropTypes.string.isRequired,
};

export default CardTextSlider;
