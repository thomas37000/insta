import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Profil.css';

const Profil = () => {
  const [profil, setProfil] = useState('');
  return (
    <div>
      <div className="divProfil">
        <img
          src="https://c.pxhere.com/photos/4f/ee/photo-29014.jpg!d"
          className="profil"
          alt={profil}
        />
      </div>
    </div>
  );
};

Profil.proptypes = {};

export default Profil;
