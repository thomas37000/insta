import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import CardTextSlider from './CardText';
import './Card.css';

const CardSlider = ({ img, image, name }) => {
  const { id } = useParams();
  console.log('id', id);

  const [usernames, setUsernames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getProfil = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json'
  //       );
  //       setUsernames(
  //         res.data.users.filter((user) => {
  //           return user.id === parseInt(id);
  //         })[0]
  //       );
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getProfil();
  // }, [id]);

  useEffect(() => {
    const getProfil = async () => {
      try {
        const res = await axios.get(
          `https://spaceprotectionalienapi.herokuapp.com/alien/${id}`
        );

        setUsernames(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProfil();
  }, [id]);

  if (!usernames) return <div>err...</div>;
  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error...
        <Link to="/">
          <div>Home</div>
        </Link>
      </div>
    );

  return (
    <>
      <div className="slider-container">
        <div className="card-slider">
          <div className="CardImg">
            {/* <img src={image.url} alt={name} className="cards-image" /> */}
            <img src={img} alt={name} className="cards-slider-image" />
          </div>
        </div>
        <CardTextSlider />
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
