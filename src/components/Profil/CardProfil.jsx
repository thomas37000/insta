import React from 'react';
import PropTypes from 'prop-types';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profil.css';

const CardProfil = ({ img, username }) => {
  return (
    <>
      <div className="divProfil">
        <img src={img} className="profil" alt={username} />
      </div>
      <div className="profil-description">
        <div className="profil-header">
          <div className="profil-name">
            <h2>{username}</h2>
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
            <button
              type="button"
              className="select btn-ellipsis"
              // onClick={()=>()}
            >
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis" />
            </button>
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
              <h1 className="desc-name">{username}</h1>
            </div>
            <div className="">Developper Web Junior from Nantes</div>
            <div className="">Javascript / React</div>
            <div className="github">
              <a
                className="github-link"
                href="https://github.com/thomas37000"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/thomas37000
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardProfil.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default CardProfil;
