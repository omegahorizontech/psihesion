import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { updateNodeList } from '../../actions/node';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'
import ProfileTable from '../General/table'

const Nodes = ({
  selectedNodes,
  general,
  updateActiveSubPage,
  updateRequestData
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateNodeList())
  }, [dispatch]);
  const { loading, error } = general;

  const { nodes } = useSelector((state) => state.node );

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'nodes'}
        text={'Nodes'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('overview')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'View various entities'} />

      <ProfileTable data={nodes}></ProfileTable>
    </div>
  );
};

export default Nodes;
