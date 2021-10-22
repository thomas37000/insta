import React from 'react';
import PropTypes from 'prop-types';
import './Profil.css';

const ProfilSkeleton = ({ type }) => {
  const classes = `skeleton2 ${type}`;
  return (
    <div className="divProfil">
      <div className={classes}></div>
    </div>
  );
};

ProfilSkeleton.propTypes = {
  // type: PropTypes.element,
  type: PropTypes.string.isRequired,
};

export default ProfilSkeleton;
