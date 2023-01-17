import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DISCOVERY_ROUTE } from '../../config/routes'
import { SAMPLE_AUTH_ROUTE } from '../../config/routes'

import { useSelector } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_03.png'
import socialDiscovery from './images/pexels-brett-sayles-3653997_opacity20.png'
import rustLock from './images/pexels-francesco-ungaro-3847285.jpg'

import CustomCard from '../General/custom-card'
import CustomButton from '../General/custom-button'
import { PanelHeading } from '../General/heading';
import Panel from '../General/panel'
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
      <div className='standard_flex_between'>
        <div className="general--landing standard_flex_column standard_flex_center">
            <h1>Psihesion</h1>
            <h2>Enlightened Social Cohesion</h2>
            <Link to={'/'}>
                <CustomButton text={'View Reports'}/>
            </Link>
        </div>
        <Panel>
          <PanelHeading
              iconType={''}
              icon={'permIdentity'}
              text={'People'}>
          </PanelHeading>
          <div className="general--panel-microcopy">Find others with a detailed searched</div>
          <div className='general--panel-text'>Explore the possibility of connecting with others. Find others with specific filtering based on their qualities.</div>
          <psi-image-group
              imageroot={imageroot}
              imagelist={imagelist}>
          </psi-image-group>
        </Panel>
      </div>
    </>
  );
};

export default Home;
