import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

const CardTextSlider = () => {
  const { id } = useParams();
  console.log('id', id);

  const [usernames, setUsernames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfil = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json'
        );
        // obligé de mettre un parseInt pour récupérer l' id
        // car il le considère comme du texte
        setUsernames(
          res.data.users.filter((user) => {
            return user.id === parseInt(id);
          })[0]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProfil();
  }, [id]);

  console.log('user', usernames);

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

  const { img, username } = usernames;

  return (
    <>
      <div className="card-text">
        <div className="card-header-text">{username} </div>
        <img src={img} alt={username} className="" />
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
