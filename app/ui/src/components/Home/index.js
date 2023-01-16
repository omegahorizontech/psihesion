import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DISCOVERY_ROUTE } from '../../config/routes'
import { SAMPLE_AUTH_ROUTE } from '../../config/routes'

import { useSelector } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_03.png'
import socialDiscovery from './images/pexels-brett-sayles-3653997_opacity20.png'
import rustLock from './images/pexels-francesco-ungaro-3847285.jpg'

import CustomCard from '../General/custom-card'
import LoadingIndicator from '../General/loading-indicator'

const Home = ({ /* 'Props' from paraent component */ }) => {

  const imageroot = 'https://images.pexels.com/photos/';
  let imagelist = '';

  imagelist += '1119972/pexels-photo-1119972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' + ','
  imagelist += '1119971/pexels-photo-1119971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' + ','
  imagelist += '1119974/pexels-photo-1119974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' + ','
  imagelist += '1119976/pexels-photo-1119976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (
    <>
      <div className="home--banner">
        <div className="landing">
          <h1>Psihesion</h1>
          <psi-image-group
            imageroot={imageroot}
            imagelist={imagelist}>
          </psi-image-group>
        </div>
      </div>
      <div className="general--card_group standard_flex_center">
        <div>
          <Link to={DISCOVERY_ROUTE}>
            <CustomCard
              iconType={''}
              icon={'bioTech'}
              title="Social Discovery"
              inv={false}
              variant={'wide'}
              img={socialDiscovery}
              text={'Find opportunities automatically'}/>
          </Link>
        </div>
        <div>
          <Link to={SAMPLE_AUTH_ROUTE}>
            <CustomCard
              icon={'lockSecure'}
              title='Log In'
              inv={true}
              img={rustLock}
              variant={'wide'}
              text={'To start, log in or sign up'}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
