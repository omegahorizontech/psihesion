import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'

import { addNode } from '../../actions/node';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import { CustomFormCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const NewNode = ({ general, updateActiveSubPage, updateRequestData }) => {
  const dispatch = useDispatch();
  // Reset any errors when rerendering this page for the first time
  useEffect(() => {
    dispatch(resetError(formValues))
  }, [dispatch]);

  const updateAndBack = (type, formValues) => {
     // IDEA: Get the ID from the server to update the state with the ID
     // updateRequestData(type, {_id: null}) // type = 'nodes'
     dispatch(addNode(formValues))
     updateActiveSubPage('nodes')
  }

  const { loading, error } = general;

  const d_NodeFormValues = {
    "display_name": "",
  }

  const [formValues, setNodeFormValues] = useState(d_NodeFormValues);

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'nodes'}
        text={'New Node'}>
        <div className="standard_button_group">
          <a className="standard_pointer" onClick={() => {updateActiveSubPage('nodes')}}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Create a new node to add it to the list of possible nodes'} />

      <div className="standard_flex_column standard_flex_start">
        <div className="standard_flex_around">
          <CustomFormCard img={psiBkgd}>
            <Form>

              <FormHeading text={'A name identifies an node'} />
              <Form.Group controlId="display_name">
                <Form.Control
                  type="text"
                  value={formValues['display_name']}
                  placeholder="Primary Name (e.g. Hari Seldon)"
                  onChange={() => setNodeFormValues({...formValues, display_name: display_name['value']})}/>
              </Form.Group>

            </Form>
          </CustomFormCard>
        </div>
        <div className="standard_flex_center">
          <a className={!loading ? "standard_pointer" : "standard_loading"}>
            <CustomButton
              onClick={() => updateAndBack('nodes', formValues)}
              loading={loading}
              icon={'beenHere'}
              text={'Add Node'}/>
          </a>
        </div>
        <div className="standard_error_message standard_form_error_message">
          { error }
        </div>

      </div>
    </div>
  );
};

export default NewNode;
