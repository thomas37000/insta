import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import CardDogs from '../Card/CardDogs';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import CardUfo from '../Card/CardUfo';
import Skeleton from '../Card/Skeleton';
import Skeleton2 from '../Profil/Skeleton2';
import './Grid.css';
import CardProfil from '../Profil/CardProfil';

const Grid = ({ id }) => {
  const [instas, setInstas] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [usernames, setUsernames] = useState(null);
  const [ovnis, setOvnis] = useState({});

  const loadUfoApi = async () => {
    setTimeout(async () => {
      const res = await axios.get(
        'https://spaceprotectionalienapi.herokuapp.com/alien/'
      );
      const data = await res;
      setOvnis(res.data);
    }, 2000);
  };

  const loadData = () => {
    setTimeout(async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/thomas37000/insta/master/fake-api.json'
      );
      const data = await res
        .json()
        .then((data) => {
          // console.log('useEffect', data);
          setInstas(data.instagram);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  const loadDataDogs = () => {
    setTimeout(async () => {
      const res = await fetch('https://api.thedogapi.com/v1/breeds');
      const data = await res
        .json()
        .then((data) => {
          // console.log('useEffect', data);
          setDogs(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  const loadDataUsers = async () => {
    setTimeout(async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/thomas37000/insta/master/fake-users.json'
      );
      const data = await res
        .json()
        .then((data) => {
          console.log('users', data.users);
          setUsernames(data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  useEffect(() => {
    loadData();
    loadDataDogs();
    loadDataUsers();
    loadUfoApi();
  }, []);

  const fetchApi =
    instas &&
    instas.map((insta, i) => {
      return <Card key={i} {...insta} />;
    });

  const fetchDogs =
    dogs &&
    dogs.map((dog, i) => {
      return <CardDogs key={i} {...dog} />;
    });

  const fetchOvnis =
    ovnis.length > 0 &&
    ovnis.map((ovni, i) => {
      return <CardUfo key={i} {...ovni} />;
    });

  const fetchUsers =
    usernames &&
    usernames.map((user, i) => {
      return <CardProfil key={i} {...user} />;
    });

  return (
    <div>
      <Nav />
      <div className="insta-container">
        {/* {fetchUsers[1]} */}
        {fetchUsers}
        {!usernames && [1].map((i) => <Skeleton2 key={i} />)}
        <div className="box">
          {fetchApi}
          {!instas && [1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} />)}
          {fetchOvnis}
          {!ovnis && [1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} />)}
          {fetchDogs}
          {!dogs && [1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} />)}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  id: PropTypes.number,
};

export default Grid;
