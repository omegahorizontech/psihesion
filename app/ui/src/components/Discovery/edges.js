import React, { useState, useEffect } from 'react';

import { updateEdgeList } from '../../actions/edge';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const Edges = ({
  selectedEdges,
  general,
  updateActiveSubPage,
  updateRequestData
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateEdgeList())
  }, [dispatch]);
  const { loading, error } = general;

  const { possibleEdges } = useSelector((state) => state.edge );

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'edges'}
        text={'Edges'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('overview')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('newEdge')}}>
            <CustomButton icon={'addCircle'} text={'New'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Toggle cards to add edges, or create a new edge first'} />

      <CustomCardSearch
        type={'edge'}
        data={possibleEdges}
        selectedComponents={selectedEdges}
        updateRequestData={updateRequestData}
        cardImg={psiBkgd}
        emptyText={'There aren\'t any edges, why not create one?'}
        filterText={'Search for edges'} />
    </div>
  );
};

export default Edges;
