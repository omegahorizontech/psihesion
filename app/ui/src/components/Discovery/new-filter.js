import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

import { isEmpty } from '../../util/helpers';
import { ROOT_ROUTE } from '../../config/routes'
import { filterLookup } from '../../config/lookup'

import { updateNodeList } from '../../actions/node';
import { updateEdgeList } from '../../actions/edge';
import { updateRelList } from '../../actions/relationship';
import { updateFieldList } from '../../actions/field';
import { addFilter } from '../../actions/filter';

import { useSelector, useDispatch } from 'react-redux';

import cardImg from './images/oht-psi_bkgd_04.png'

import CustomButton, { CustomBorderlessButton } from '../General/custom-button'
import CustomCardSearch, { CardList } from '../General/custom-card-search'
import { DiscoveryCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const NewFilter = ({
  general,
  updateActiveSubPage,
  updateRequestData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(updateNodeList())
      dispatch(updateEdgeList())
      dispatch(updateRelList())
      dispatch(updateFieldList())
  }, [dispatch]);

  const updateAndBack = () => {
    let requestBody = {}
    for (const [key, value] of Object.entries(resultData)) {
        // Add a reformated ID that deduplicates the Mongo Object ID
        requestBody[key] = value.map((d) => {
            d['id'] = d['_id']['$oid']
            return d
        })
    }
    dispatch(addFilter(requestBody))
    updateActiveSubPage('filter')
  }

  const defaultResultData = {
    'show-components': [],
    'coupled-with': [],
    'field-features': [],
  }

  const { loading, error } = general;
  const { node, edge, relationship, field } = useSelector((state) => state);

  const [focusHidden, setFocusHidden] = useState(false)
  const [contextHidden, setContextHidden] = useState(false)
  const [selectedComponentTypes, setSelectedComponentTypes] = useState([])
  const [selectedData, setSelectedData] = useState(null)
  const [resultData, setResultData] = useState(defaultResultData) /* Result - as in the result of the filter builder as/after the user builds it */

  // Add types to sets of data for rendering cards correctly
  const addType = (data, type) => {
    return data.map((d) => {
      d['type'] = type
      return d
    })
  }

  // Set up data strucutre to render cards correctly
  let possibleData = {
    "node": addType(node.possibleNodes, 'node'),
    "edge": addType(edge.possibleEdges, 'edge'),
    "relationship": addType(relationship.possibleRels, 'relationship'),
    "field": addType(field.possibleFields, 'field')
  };

  const viewDetails = (data, type) => {
    // IDEA: View more information when clicked
    console.log('Not Implemented')
  }

  const chooseComponent = (data, type) => {
    if (focusHidden) {
      setFocusHidden(false)
      setContextHidden(false)

      setSelectedComponentTypes([])

      // IDEA: Save the data - update the state of the 'show components/coupled with/field features'
      const key = selectedData.toLowerCase().split(' ').join('-')

      // IDEA: Only add the card if it unique, otherwise deplicate the list in another way
      setResultData(() => ({
        ...resultData,
        [key]: [...resultData[key], data] // Set the key to the resultData['key'] + 'selectedData'
      }))
    } else {
      setContextHidden(!contextHidden)

      setSelectedComponentTypes(type.split('-')[1]) // IDEA: Handle cases where there is no split, and where types is not in 1st position

      // Render the data - update the left context area with the clicked card data
      setSelectedData(data)

    }
  }

  const selectEmptyComponent = (contextTitle, types) => {
    /* else: Hide the focus, suggest "Choose a card to the left" */
    if (contextHidden) {
      setFocusHidden(false)
      setContextHidden(false)

      setSelectedComponentTypes([])

      // IDEA: Save the data - update the state of the 'show components/coupled with/field features'
      const key = contextTitle.toLowerCase().split(' ').join('-')

      // IDEA: Only add the card if it unique, otherwise deduplicate the list in another way
      setResultData(() => ({
        ...resultData,
        [key]: [...resultData[key], selectedData] // Set the key to the resultData['key'] + 'selectedData'
      }))
    } else {
      setFocusHidden(!contextHidden)

      setSelectedComponentTypes(types)

      // Render the data - update the right focus area with the clicked sub-context data
      setSelectedData(contextTitle)
    }
  }

  const validateData = () => {
    for (const [key, value] of Object.entries(resultData)) {
      if (value && Array.isArray(value) && value.length > 0) {
        // NOOP: Is an array with length greater than 0
      } else {
        return true // The value fails validation, disable the button
      }
    }
    // All values exists
    return false
  }

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={filterLookup['filter']['secondaryHeading']['icon']}
        text={filterLookup['filter']['secondaryHeading']['text']}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton onClick={() => {updateActiveSubPage('filter')}} icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer">
            <CustomButton
              onClick={() => updateAndBack()}
              loading={loading}
              disabled={validateData()}
              icon={'beenHere'}
              text={filterLookup['filter']['confirmButton']['text']} />
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={filterLookup['filter']['microcopyHeading']['text']} />

      <div className="standard_flex_between">
        {/* Select an item with the filter */}
        <div className="standard_select-left_pane standard_min_height">
          { !contextHidden && (
            <CustomCardSearch
              type={'filter-builder'}
              selectType={'single'}
              data={possibleData ? possibleData : {}}
              selectedComponents={[]}
              updateRequestData={updateRequestData}
              chooseCard={chooseComponent}
              cardImg={cardImg}
              emptyText={filterLookup['filter']['cardFilter']['emptyText']}
              filterText={filterLookup['filter']['cardFilter']['filterText']}
              defaultFilterTypes={selectedComponentTypes} />
          )}
          { contextHidden && (
            <div className="standard_flex_column standard_flex_start">
              <SecondaryHeading text={'Choose a context'} />
              <MicrocopyHeading text={'Pick a context for this card'} />
              <DiscoveryCard
                key={selectedData['_id']['$oid']}
                data={selectedData}
                type={selectedData['type']}
                context={'display'}
                currentIds={[]}
                cardImg={cardImg} />
            </div>
          )}
        </div>

        {/* View the filter builder focus */}
        <div className="standard_flex_column standard_flex_start standard_select-right_pane">
          <div className="standard_flex_around standard_min_height">

            { !focusHidden && (
              <>
                {( !selectedComponentTypes.includes('field') || selectedComponentTypes.length === 0) && (
                  <div className="standard_min_width standard_flex_column standard_flex_start standard_min_height">
                    <SecondaryHeading text={'Show components'} />

                    <div className="general--card_deck-two_card_height"
                         style={{
                           justifyContent: resultData['show-components'].length < 2 ? "center" : ''
                         }}>
                      <CardList
                        type={'filter-builder'}
                        data={resultData['show-components']}
                        currentIds={[]}
                        chooseCard={viewDetails}
                        cardImg={cardImg} />

                      { resultData['show-components'].length == 0 && (
                        <MicrocopyHeading text={'No components'} />
                      )}
                    </div>

                    <a className="standard_pointer">
                      <CustomBorderlessButton
                        onClick={() => selectEmptyComponent('Show components', ['node', 'edge', 'relationship'])}
                        icon={'swapVert'}
                        borderRadius={"8px 8px 8px 8px"}
                        text={'Add Component'}/>
                    </a>
                  </div>
                )}

                {( selectedComponentTypes.includes('field') || selectedComponentTypes.length === 0) && (
                  <div className="standard_min_width standard_flex_column standard_flex_start standard_min_height">
                    <SecondaryHeading text={'Coupled with'} />

                    <div className="general--card_deck-two_card_height"
                         style={{
                           justifyContent: resultData['coupled-with'].length == 0 ? "center" : ''
                         }}>
                      <CardList
                        type={'filter-builder'}
                        data={resultData['coupled-with']}
                        currentIds={[]}
                        chooseCard={viewDetails}
                        cardImg={cardImg} />

                      { resultData['coupled-with'].length == 0 && (
                        <MicrocopyHeading text={'No fields'} />
                      )}
                    </div>

                    <a className="standard_pointer">
                      <CustomBorderlessButton
                        onClick={() => selectEmptyComponent('Coupled with', ['field'])}
                        iconType={'discovery'}
                        icon={'field'}
                        borderRadius={"8px 8px 8px 8px"}
                        text={'Add Field'}/>
                    </a>
                  </div>
                )}

                {( selectedComponentTypes.includes('field') || selectedComponentTypes.length === 0) && (
                  <div className="standard_min_width standard_flex_column standard_flex_start standard_min_height">
                    <SecondaryHeading text={'Field features'} />

                    <div className="general--card_deck-two_card_height"
                         style={{
                           justifyContent: resultData['field-features'].length == 0 ? "center" : ''
                         }}>
                      <CardList
                        type={'filter-builder'}
                        data={resultData['field-features']}
                        currentIds={[]}
                        chooseCard={viewDetails}
                        cardImg={cardImg} />

                      { resultData['field-features'].length == 0 && (
                        <MicrocopyHeading text={'No fields'} />
                      )}
                    </div>

                    <a className="standard_pointer">
                      <CustomBorderlessButton
                        onClick={() => selectEmptyComponent('Field features', ['field'])}
                        iconType={'discovery'}
                        icon={'field'}
                        borderRadius={"8px 8px 8px 8px"}
                        text={'Add Field'}/>
                    </a>
                  </div>
                )}
              </>
            )}
            { focusHidden && (
              <div className="standard_flex_column standard_flex_around">
                <SecondaryHeading text={selectedData} />
                <MicrocopyHeading text={'Choose a card to left'} />
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

export default NewFilter;
