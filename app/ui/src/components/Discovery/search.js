import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { grabProfiles } from '../../actions/profile';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import { CustomFormCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const Search = ({ general, searchString, updateActiveSubPage, updateRequestData }) => {
  const dispatch = useDispatch();
  // Reset any errors when rerendering this page for the first time
  useEffect(() => {
    dispatch(resetError(formValues))
  }, [dispatch]);

  const { loading, error } = general;

  const d_SearchFormValues = {
    "search": searchString ? searchString : "",
  }

  const [formValues, setRelFormValues] = useState(d_SearchFormValues);

  const updateAndBack = (type, formValues) => {
     updateRequestData(type, formValues) // type = 'relationships'
     updateActiveSubPage('overview')
  }

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'search'}
        text={'Search'}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton onClick={() => {updateActiveSubPage('overview')}} icon={'arrowBack'} text={'Back'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Use keywords to search'} />

      <div className="standard_flex_column standard_flex_start">
        <div className="standard_flex_around">
          <CustomFormCard img={psiBkgd}>
            <Form>

              <FormHeading text={'Search similar to other search engines'} />
              <Form.Group controlId="search">
                <Form.Control
                  as="textarea" rows={3}
                  value={formValues['search']}
                  placeholder="Search with free-text keywords"
                  onChange={() => setRelFormValues({...formValues, search: search['value']})}/>
              </Form.Group>

            </Form>
          </CustomFormCard>
        </div>

        <div className="standard_flex_center">
          <a className={!loading ? "standard_pointer" : "standard_loading"}>
            <CustomButton
              onClick={() => updateAndBack('search', formValues['search'])}
              loading={loading}
              icon={'beenHere'}
              text={'Add Keywords'}/>
          </a>
        </div>
        <div className="standard_error_message standard_form_error_message">
          { error }
        </div>

      </div>
    </div>
  );
};

export default Search;
