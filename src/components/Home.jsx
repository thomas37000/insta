import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ id }) => {
  return (
    <Link to={`/${id}`}>
      <div>Hello Instagram, go to your profile</div>;
    </Link>
  );
};

Home.propTypes = {
  id: PropTypes.number,
};

export default Home;
