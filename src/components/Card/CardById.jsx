import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profil/Profil.css';

export default function CardById(values) {
  const { id } = useParams();
  const [data, setData] = useState({});

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://spaceprotectionalienapi.herokuapp.com/alien/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { image, name } = data;

  return (
    <>
      <div className="profil-container">
        <div className="divProfil">
          <img src={image} className="profil" alt={name} />
        </div>
        <div className="profil-description">
          <div className="profil-header">
            <div className="profil-name">
              <h2>{name}</h2>
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
                <h1 className="desc-name">{name}</h1>
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
