import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Profil.css';

const Profil = () => {
  const [profil, setProfil] = useState('cool-cat');
  return (
    <>
      <div className="profil-container">
        <div className="divProfil">
          <img
            src="https://c.pxhere.com/photos/4f/ee/photo-29014.jpg!d"
            className="profil"
            alt={profil}
          />
        </div>
        <div className="profil-description">
          <div className="profil-header">
            <div className="profil-name">
              <h2>{profil}</h2>
            </div>
          </div>
          <div className="follow">
            <div className=""><span className="span-profil">23</span> posts</div>
            <div className=""><span className="span-profil">12O</span> followers</div>
            <div className=""><span className="span-profil">221</span> following</div>
          </div>
          <div className="ufoAge">
            <div className="ufoDesc">lorem</div>
          </div>
          <div></div>
          <div className="ufoDescType">
            <div>ipsum</div>
            <div className="alienType">aaa</div>
          </div>
          <div className="ufoPersonality">
            <div className="alienType">Personnalité(e): </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profil.proptypes = {};

export default Profil;
