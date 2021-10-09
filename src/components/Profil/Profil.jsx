import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profil.css';

function Profil() {
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

  if (!usernames) return <div>err...</div>;
  if (loading) return <div>Loading...</div>;

  const { img, username } = usernames;

  return (
    <>
      <div className="profil-container">
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
      </div>
    </>
  );
}

Profil.proptypes = {};

export default Profil;
