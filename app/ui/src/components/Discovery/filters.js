import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { updateFilterList } from '../../actions/filter';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const Filters = ({
  selectedFilters,
  general,
  updateActiveSubPage,
  updateRequestData
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilterList())
  }, [dispatch]);
  const { loading, error } = general;

  const { possibleFilters } = useSelector((state) => state.filter );

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'filter'}
        text={'Filters'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('overview')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('newFilter')}}>
            <CustomButton icon={'addCircle'} text={'New'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Toggle cards to add filters, or create a new filter first'} />

      <CustomCardSearch
        type={'filter'}
        data={possibleFilters}
        selectedComponents={selectedFilters}
        updateRequestData={updateRequestData}
        cardImg={psiBkgd}
        emptyText={'There aren\'t any filters, why not create one?'}
        filterText={'Search for filters'} />
    </div>
  );
};

export default Filters;
