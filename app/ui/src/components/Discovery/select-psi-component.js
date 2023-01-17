import React, { useState, useEffect } from 'react';
import { isEmpty } from '../../util/helpers';
import { ROOT_ROUTE } from '../../config/routes'
import { selectTypeLookup } from '../../config/lookup'

import { updateNodeList } from '../../actions/node';
import { updateEdgeList } from '../../actions/edge';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import cardImg from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import { DiscoveryCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const SelectPsiComponent = ({
  general,
  type,
  selectedComponent,
  updateActiveSubPage,
  updateRequestData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    switch (type) {
      case 'node':
        dispatch(updateNodeList())
        break;
      case 'edge':
        dispatch(updateEdgeList())
        break;
      default:
        break;
    }
  }, [dispatch]);

  const undoAndBack = () => {
    updateRequestData(`single-${type}`, {});
    updateRequestData(`single-${type}`, {});
    updateActiveSubPage('newRelationship');
  }

  const { loading, error } = general;
  const { node, edge } = useSelector((state) => state);

  let possibleData = [];

  switch (type) {
    case 'node':
      possibleData = node.possibleNodes
      break;
    case 'edge':
      possibleData = edge.possibleEdges
      break;
    default:
      break
  }

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={selectTypeLookup[type]['secondaryHeading']['icon']}
        text={selectTypeLookup[type]['secondaryHeading']['text']}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton
              onClick={() => undoAndBack()}
              icon={'arrowBack'}
              text={'Back'}/>
          </a>
          <a className="standard_pointer">
            <CustomButton
              onClick={() => updateActiveSubPage('newRelationship')}
              icon={'swapVert'}
              text={selectTypeLookup[type]['confirmButton']['text']} />
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={selectTypeLookup[type]['microcopyHeading']['text']} />

      <div className="standard_flex_start">
        {/* Select an item with the filter */}
        <div className="standard_select-left_pane standard_min_height">
          <CustomCardSearch
            type={type}
            selectType={'single'}
            data={possibleData ? possibleData : []}
            selectedComponents={[selectedComponent]}
            updateRequestData={updateRequestData}
            cardImg={cardImg}
            emptyText={selectTypeLookup[type]['cardFilter']['emptyText']}
            filterText={selectTypeLookup[type]['cardFilter']['filterText']} />
        </div>

        {/* View the selection */}
        <div className="standard_flex_column standard_flex_start standard_select-right_pane">
          <div className="standard_flex_around standard_min_height">
            {isEmpty(selectedComponent) && (
              <div className="standard_flex_column standard_flex_around">
                <SecondaryHeading text={selectTypeLookup[type]['selectText']['emptyText']} />
              </div>
            )}

            {!isEmpty(selectedComponent) && (
              <div className="standard_flex_column standard_flex_start">
                <DiscoveryCard
                  data={selectedComponent}
                  type={`single-form-${type}`}
                  currentIds={[selectedComponent['_id']['$oid']]}
                  updateRequestData={updateRequestData}
                  cardImg={cardImg} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="standard_error_message standard_form_error_message">
        { error }
      </div>
    </div>
  );
};

export default SelectPsiComponent;
