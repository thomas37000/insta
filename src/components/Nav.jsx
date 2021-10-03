import React from 'react';
import PropTypes from 'prop-types';
import {
  faCompass,
  faHeart,
  faHome,
  faPaperPlane,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <header className="App-header">
        <div className="divLogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div className="search-input">
          <div className="div-input">
            <input type="text" placeholder="Search" />
            <div className="span-input">
              <span>
                <FontAwesomeIcon icon={faSearch} className="search" />
              </span>
              <span>Search</span>
            </div>
          </div>
        </div>
        <div className="nav-icons">
          <div className="nav-links">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="nav-links">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className="nav-links">
            <FontAwesomeIcon icon={faCompass} />
          </div>
          <div className="nav-links">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="nav-links">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </div>
      </header>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
