import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { updateFieldList } from '../../actions/field';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const Fields = ({
  selectedFields,
  general,
  updateActiveSubPage,
  updateRequestData
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFieldList())
  }, [dispatch]);
  const { loading, error } = general;

  const { possibleFields } = useSelector((state) => state.field );

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'field'}
        text={'Fields'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('overview')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('newField')}}>
            <CustomButton icon={'addCircle'} text={'New'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Toggle cards to add fields, or create a new field first'} />

      <CustomCardSearch
        type={'viz-field'}
        data={possibleFields}
        selectedComponents={selectedFields}
        updateRequestData={updateRequestData}
        cardImg={psiBkgd}
        emptyText={'There aren\'t any fields, why not create one?'}
        filterText={'Search for fields'} />
    </div>
  );
};

export default Fields;
