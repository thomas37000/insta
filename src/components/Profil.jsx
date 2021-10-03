import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <div className="btn-profil">
                <button
                  type="submit"
                  className="follow-me"
                  // onClick={()=>()}
                >
                  Follow
                </button>
                <button
                  type="button"
                  className="select"
                  // onClick={()=>()}
                >
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                </button>
              </div>
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis" />
            </div>
          </div>
          <div className="desc-container">
            <div className="follow">
              <div className="">
                <span className="span-profil">23</span> posts
              </div>
              <div className="">
                <span className="span-profil">12O</span> followers
              </div>
              <div className="">
                <span className="span-profil">221</span> following
              </div>
            </div>

            <div className="profil-desc">
              <div>
                <h1 className="desc-name">{profil}</h1>
              </div>
              <div className="">Developper Web Junior from Nantes</div>
              <div className="">Javascript / React</div>
              <diV className="github">https://github.com/thomas37000</diV>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profil.proptypes = {};

export default Profil;
