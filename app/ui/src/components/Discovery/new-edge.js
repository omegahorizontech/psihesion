import React, { useState, useEffect } from 'react';
import { ROOT_ROUTE } from '../../config/routes'
import { edgeTypeLookup } from '../../config/lookup'

import { addEdge } from '../../actions/edge';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import psiBkgd from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import { CustomFormCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const NewEdge = ({ general, updateActiveSubPage, updateRequestData }) => {
  const dispatch = useDispatch();
  // Reset any errors when rerendering this page for the first time
  useEffect(() => {
    dispatch(resetError(formValues))
  }, [dispatch]);

  const updateAndBack = (type, formValues) => {
    const _id = edgeTypeLookup[formValues['edge_type']] + '-' + formValues[formValues['edge_type']];
    updateRequestData('edges', {_id: _id}) // type = 'edges'
    dispatch(addEdge(formValues))
    updateActiveSubPage('edges')
  }

  const { loading, error } = general;

  const d_RelFormValues = {
    "performs": "",
    "distinguished_by": "",
    "works": "",
    "lives": "",
    "groups_with": "",
    "sort": "date",
    "edge_type": "",
  }

  const [formValues, setRelFormValues] = useState(d_RelFormValues);

  const options = (
    Object.keys(edgeTypeLookup).map((k) => {
      return <option key={k} value={k}>{edgeTypeLookup[k]}</option>
    })
  )

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'edges'}
        text={'New Edge'}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton onClick={() => {updateActiveSubPage('edges')}} icon={'arrowBack'} text={'Back'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Add a new edge with a specific value (node) to use while searching'} />

      <div className="standard_flex_column standard_flex_start">
        <div className="standard_flex_around">
          <CustomFormCard img={psiBkgd}>
            <Form>

              <Form.Group className="standard_flex_end" controlId="formBasicSelect">
                <Form.Label>Edge Type</Form.Label>
                <Form.Control
                  as="select"
                  value={formValues['edge_type']}
                  onChange={e => setRelFormValues({...formValues, edge_type: e.target.value})}>
                  <option value="">No type selected</option>
                  {
                    options
                  }
                </Form.Control>
              </Form.Group>

              {formValues['edge_type'] == '' && (
                <FormHeading text={'Choose an edge type to get started'} />
              )}

              {formValues['edge_type'] == 'performs' && (
                <>
                  <FormHeading text={'Nodes perform roles due to cultural context'} />
                  <Form.Group controlId="performs">
                    <Form.Control
                      type="text"
                      value={formValues['performs']}
                      placeholder="Role (e.g. Cultural Scientist)"
                      onChange={() => setRelFormValues({...formValues, performs: performs['value']})}/>
                  </Form.Group>
                </>
              )}

              {formValues['edge_type'] == 'distinguished_by' && (
                <>
                  <FormHeading text={'A title distinguishes a node with a formal or informal name'} />
                  <Form.Group controlId="distinguished_by">
                    <Form.Control
                      type="text"
                      value={formValues['distinguished_by']}
                      placeholder="Title (e.g. of Virginia OR JavaScript Developer)"
                      onChange={() => setRelFormValues({...formValues, distinguished_by: distinguished_by['value']})}/>
                  </Form.Group>
                </>
              )}

              {formValues['edge_type'] == 'works' && (
                <>
                  <FormHeading text={'A node works at a place'} />
                  <Form.Group controlId="works">
                    <Form.Control
                      type="text"
                      value={formValues['works']}
                      placeholder="Place (e.g. Front Royal, VA)"
                      onChange={() => setRelFormValues({...formValues, works: works['value']})}/>
                  </Form.Group>
                </>
              )}

              {formValues['edge_type'] == 'lives' && (
                <>
                  <FormHeading text={'A node lives at a place'} />
                  <Form.Group controlId="lives">
                    <Form.Control
                      type="text"
                      value={formValues['lives']}
                      placeholder="Place (e.g. Front Royal, VA)"
                      onChange={() => setRelFormValues({...formValues, lives: lives['value']})}/>
                  </Form.Group>
                </>
              )}

              {formValues['edge_type'] == 'groups_with' && (
                <>
                  <FormHeading text={'A node groups with a faction depending on the nodes\'s context'} />
                  <Form.Group controlId="groups_with">
                    <Form.Control
                      type="text"
                      value={formValues['groups_with']}
                      placeholder="Faction (e.g. Omega Horizon)"
                      onChange={() => setRelFormValues({...formValues, groups_with: groups_with['value']})}/>
                  </Form.Group>
                </>
              )}

            </Form>
          </CustomFormCard>
        </div>

        <div className="standard_flex_center">
          <a className={!loading ? "standard_pointer" : "standard_loading"}>
            <CustomButton
              onClick={() => updateAndBack('edges', formValues)}
              loading={loading}
              icon={'beenHere'}
              text={'Add Edge'}/>
          </a>
        </div>
        <div className="standard_error_message standard_form_error_message">
          { error }
        </div>

      </div>
    </div>
  );
};

export default NewEdge;
