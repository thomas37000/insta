import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import CardDogs from '../Card/CardDogs';
import Card from '../Card/Card';
import Profil from '../Profil/Profil';
import Nav from '../Nav/Nav';
import './Grid.css';
import CardUfo from '../Card/CardUfo';

const Grid = ({ id }) => {
  const [instas, setInstas] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [ovnis, setOvnis] = useState({});

  const loadUfoApi = async () => {
    await axios
      .get('https://spaceprotectionalienapi.herokuapp.com/alien/')
      .then((res) => {
        setOvnis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadData = async () => {
    await fetch(
      'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('useEffect', data);
        setInstas(data.instagram);
      });
  };

  const loadDataDogs = async () => {
    await fetch('https://api.thedogapi.com/v1/breeds')
      .then((res) => res.json())
      .then((data) => {
        // console.log('useEffect', data);
        setDogs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadDataUsers = async () => {
    await fetch(
      'https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('users', data.users);
        setUsernames(data.users);
      });
  };

  useEffect(() => {
    loadData();
    loadDataDogs();
    loadDataUsers();
    loadUfoApi();
  }, []);

  const fetchApi =
    instas.length > 0 &&
    instas.map((insta, i) => {
      return <Card key={i} {...insta} />;
    });

  const fetchDogs =
    dogs.length > 0 &&
    dogs.map((dog, i) => {
      return <CardDogs key={i} {...dog} />;
    });

  const fetchOvnis =
    ovnis.length > 0 &&
    ovnis.map((ovni, i) => {
      return <CardUfo key={i} {...ovni} />;
    });

  const fetchUsers =
    usernames.length > 0 &&
    usernames.map((user, i) => {
      return (
        <>
          <div className="all-users">
            <Link to={`/p/${id}`}>
              <div key={i}>
                <img src={user.img} className="profil" alt={user.username} />
                {user.username}
              </div>
            </Link>
          </div>
        </>
      );
    });

  return (
    <div>
      <Nav />
      <div className="container">
        <Profil />
        {fetchUsers}
        <div className="box">
          {fetchApi}
          {fetchOvnis}
          {fetchDogs}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  id: PropTypes.number,
};

export default Grid;
