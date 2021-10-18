import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profil.css';

function Profil(id) {
  // const { id } = useParams();
  // const [usernames, setUsernames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ovnis, setOvnis] = useState({});

  const loadUfoApi = async () => {
    await axios
      .get('https://spaceprotectionalienapi.herokuapp.com/alien/')
      .then((res) => {
        setOvnis(res.data);
        console.log('ovni api', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUfoApi();
    randomUser();
  }, []);

  const fetchOvnis =
    ovnis.length > 0 &&
    ovnis.map((ovni) => {
      return (
        <>
          <div className="divProfil">
            <img src={ovni.image} className="profil" alt={ovni.name} />
          </div>
          <div className="profil-description">
            <div className="profil-header">
              <div className="profil-name">
                <h2>{ovni.name}</h2>
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
                  <h1 className="desc-name">{ovni.name}</h1>
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
    });

  function randomUser() {
    const randomUfo = Math.floor(Math.random() * ovnis.length);
    return ovnis[randomUfo];
  }

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="profil-container">{fetchOvnis[2]}</div>
    </>
  );
}

Profil.proptypes = {};

export default Profil;
