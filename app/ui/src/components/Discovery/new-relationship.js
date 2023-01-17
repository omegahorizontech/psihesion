import React, { useState, useEffect } from 'react';
import { isEmpty } from '../../util/helpers';
import { ROOT_ROUTE } from '../../config/routes'

import { addRel } from '../../actions/relationship';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import cardImg from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import { DiscoveryCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const NewRelationship = ({
  general,
  selectedNode,
  selectedEdge,
  updateActiveSubPage,
  updateRequestData }) => {
  const dispatch = useDispatch();

  const updateAndBack = () => {
    dispatch(addRel(selectedNode, selectedEdge))
    updateActiveSubPage('relationships')
  }

  const { loading, error } = general;

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={'relationships'}
        text={'New Relationship'}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton onClick={() => {updateActiveSubPage('relationships')}} icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer">
            <CustomButton
              onClick={() => updateAndBack()}
              loading={loading}
              icon={'beenHere'}
              text={'Add Relationship'}/>
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={'Add a new relationship to describe the interaction between nodes'} />

      <div className="standard_flex_center">
        <div className="standard_width standard_flex_around standard_min_height">

          {isEmpty(selectedNode) && (
            <div className="standard_flex_column standard_flex_around">
              <a className="standard_pointer">
                <CustomButton
                  onClick={() => updateActiveSubPage('selectPsiNode')}
                  iconType={'discovery'}
                  icon={'nodes'}
                  text={'Select Node'}/>
              </a>
            </div>
          )}

          {!isEmpty(selectedNode) && (
            <div className="standard_flex_column standard_flex_start">
              <DiscoveryCard
                data={selectedNode}
                type={`single-form-node`}
                currentIds={[selectedNode['_id']['$oid']]}
                updateRequestData={updateRequestData}
                cardImg={cardImg} />

              <div className="standard_flex_center">
                <a className="standard_pointer">
                  <CustomButton
                    onClick={() => updateActiveSubPage('selectPsiNode')}
                    iconType={'discovery'}
                    icon={'nodes'}
                    text={'Select Node'}/>
                </a>
              </div>
            </div>
          )}

          {isEmpty(selectedEdge) && (
            <div className="standard_flex_column standard_flex_around">
              <a className="standard_pointer">
                <CustomButton
                  onClick={() => updateActiveSubPage('selectPsiEdge')}
                  iconType={'discovery'}
                  icon={'edges'}
                  text={'Select Edge'}/>
              </a>
            </div>
          )}

          {!isEmpty(selectedEdge) && (
            <div className="standard_flex_column standard_flex_start">
              <DiscoveryCard
                data={selectedEdge}
                type={`single-form-edge`}
                currentIds={[selectedEdge['_id']['$oid']]}
                updateRequestData={updateRequestData}
                cardImg={cardImg} />

              <div className="standard_flex_center">
                <a className="standard_pointer">
                  <CustomButton
                    onClick={() => updateActiveSubPage('selectPsiEdge')}
                    iconType={'discovery'}
                    icon={'edges'}
                    text={'Select Edge'}/>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="standard_error_message standard_form_error_message">
          { error }
        </div>

      </div>
    </div>
  );
};

export default NewRelationship;
