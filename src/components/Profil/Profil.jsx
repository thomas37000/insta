import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profil.css';

function Profil() {
  // const { id } = useParams();
  // console.log('id', id);
  const [usernames, setUsernames] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json/${id}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('users', data.users);
  //       setUsernames(data.users);
  //     });
  // }, [id]);

  const { img, username } = usernames;

  // const fetchApi =
  //   usernames.length > 0 &&
  //   usernames.map((user, i) => {
  //     return (
  //       <>
  //         {' '}
  //         <div key={i}>
  //           <img src={user.img} className="profil" alt={user.username} />
  //           {user.username}
  //         </div>
  //       </>
  //     );
  //   });

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
              {/* <div>{fetchApi}</div> */}
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
