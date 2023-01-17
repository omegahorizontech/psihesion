import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { updateRelList } from '../../actions/relationship';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const EdgeCardList = ({ data, currentIds, updateRequestData }) => {
  return <div>"Not Implemented"</div>
}

const Relationships = ({
  selectedRels,
  general,
  updateActiveSubPage,
  updateRequestData
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRelList())
  }, [dispatch]);
  const { loading, error } = general;

  const { possibleRels } = useSelector((state) => state.relationship );

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'relationships'}
        text={'Relationships'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('overview')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('newRelationship')}}>
            <CustomButton icon={'addCircle'} text={'New'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Toggle cards to add relationships, or create a new relationship first'} />

      <CustomCardSearch
        type={'relationship'}
        data={possibleRels}
        selectedComponents={selectedRels}
        updateRequestData={updateRequestData}
        cardImg={psiBkgd}
        emptyText={'There aren\'t any relationships, why not create one?'}
        filterText={'Search for relationships'} />
    </div>
  );
};

export default Relationships;
