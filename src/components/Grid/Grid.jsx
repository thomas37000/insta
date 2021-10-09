import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardDogs from '../Card/CardDogs';
import Card from '../Card/Card';
import Profil from '../Profil/Profil';
import './Grid.css';

const Grid = () => {
  const [instas, setInstas] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [usernames, setUsernames] = useState([]);

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
      `https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json`
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

  const fetchUsers =
    usernames.length > 0 &&
    usernames.map((user, i) => {
      return (
        <>
          {' '}
          <div key={i}>
            <img src={user.img} className="profil" alt={user.username} />
            {user.username}
          </div>
        </>
      );
    });

  return (
    <div>
      <div className="container">
        {/* <Profil username={name} /> */}
        <div className="box">
          {fetchUsers}
          {fetchApi}
          {fetchDogs}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {};

export default Grid;
