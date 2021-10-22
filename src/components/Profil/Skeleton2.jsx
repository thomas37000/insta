import React from 'react';
import ProfilSkeleton from './ProfilSkeleton';
import './Profil.css';

const Skeleton2 = () => {
  return (
    <>
      <div className="divProfil">
        <div className="profil-header">
          <ProfilSkeleton type="img" />
        </div>
        <div className="profil-description">
          <div className="profil-header">
            <ProfilSkeleton type="username" />
            <ProfilSkeleton type="" />
            <ProfilSkeleton type="" />
            <ProfilSkeleton type="" />
            <ProfilSkeleton type="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton2;
