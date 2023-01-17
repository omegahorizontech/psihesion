import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

import { isEmpty } from '../../util/helpers';
import { ROOT_ROUTE } from '../../config/routes'
import { selectTypeLookup, fieldBuilderLookup } from '../../config/lookup'

import { updateNodeList } from '../../actions/node';
import { updateEdgeList } from '../../actions/edge';
import { updateRelList } from '../../actions/relationship';
import { addField } from '../../actions/field';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import cardImg from './images/oht-psi_bkgd_04.png'

import CustomButton from '../General/custom-button'
import CustomCardSearch from '../General/custom-card-search'
import { DiscoveryCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, FormHeading, MicrocopyHeading } from '../General/heading'

import FieldGraph from '../D3/field-graph'

import Form from 'react-bootstrap/Form';

const NewField = ({
  general,
  updateActiveSubPage,
  updateRequestData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(updateNodeList())
      dispatch(updateEdgeList())
      dispatch(updateRelList())
  }, [dispatch]);

  const updateAndBack = () => {
    delete graphData['sourceNodeID']
    graphData['display_name'] = formValues['display_name']
    dispatch(addField(graphData))
    updateActiveSubPage('fields')
  }

  const { loading, error } = general;
  const { node, edge, relationship } = useSelector((state) => state);

  const d_FieldFormValues = {
    "display_name": "",
  }

  const [formValues, setFieldFormValues] = useState(d_FieldFormValues);

  // IDEA: Load real data from async call if there is any
  let defaultGraphData = {
    // {"id": "0"},
    "nodes": [ ],
    // {"source": "0", "target": "1"},
    "edges": [ ],
    "sourceNodeID": null,
  }

  const [graphData, updateGraphData] = useState(defaultGraphData);

  // IDEA: Load dimensions dynamically
  const dimensions = {
    width: 960,
    height: 360,
    margin: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 60
    }
  };

  const checkUniqueID = (id, data) => {
    return data.map((d) => (d.id)).includes(id)
  }

  const checkUniqueEdge = (edge, data) => {
    // Determine if the edge is in the list of edges;
    // dertermine if two key/value pairs of an node match an
    // existing node in a list of similar node
    return data.map((d) => {
        return (
          d['source'] === edge['source'] &&
          d['target'] === edge['target']
        )
    }).includes(true) // Returns true if true is in the map
  }

  const chooseCard = (data, type) => {
    switch (type) {
      case 'single-node':
        const id = data['_id']['$oid']
        const newNode = {
          id: id,
          title: data['display_name'],
          type: data['type'],
        }
        // Only add if the component's 'id' isn't already in the graph
        if (!checkUniqueID(id, graphData['nodes'])) {
          updateGraphData(() => ({...graphData, ['nodes']: [...graphData['nodes'], newNode]}))
        }
        break;
      default:

    }
    // Not Implemented
    // IDEA: Update data with the chosen card with the state 'updateCardData()'
  }

  /*
   * IDEA: Better manage state of the entire page, and consider building
   * a set of functional behaviors that update the global state. Then, read
   * from the global state to better event handling and updates: 'updateGraphData()'
   */
  const drawEdge = (selectedNode) => {
    // Stores the ID information of two 'selectedNode's via the prototype and adds an edge
    // (Put in the 'd' node with this code in 'field-graph.js' : d => Node.create(d))
    if (graphData['sourceNodeID'] === null) {
      const sourceNodeID = selectedNode['id'];
      d3.select('#' + CSS.escape(sourceNodeID))
          .attr('class', 'active');
      // Update state of the page so that the active state can be applied after clearing CSS classes
      updateGraphData(() => ({...graphData, ['sourceNodeID']: sourceNodeID}))
    } else {
      const source = graphData['sourceNodeID'];
      const target = selectedNode['id'];
      const newEdge = {
        source: source,
        target: target,
      };
      if (checkUniqueEdge(newEdge, graphData['edges'])) {
        // Add an edge only if the two edges differ
      } else if (source !== target) {
        updateGraphData(() => ({
          ...graphData,
          ['edges']: [...graphData['edges'], newEdge],
          ['sourceNodeID']: null
        }))
      } else {
        // Unselect node
        updateGraphData(() => ({...graphData, ['sourceNodeID']: null}))
      }
    }
  }

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
    "relationship": addType(relationship.possibleRels, 'relationship')
  };

  return (
    <div>
      <SecondaryHeading
        iconType={'discovery'}
        icon={fieldBuilderLookup['secondaryHeading']['icon']}
        text={fieldBuilderLookup['secondaryHeading']['text']}>
        <div className="standard_button_group">
          <a className="standard_pointer">
            <CustomButton onClick={() => {updateActiveSubPage('fields')}} icon={'arrowBack'} text={'Back'}/>
          </a>
          <a className="standard_pointer">
            <CustomButton
              onClick={() => updateAndBack()}
              loading={loading}
              disabled={
                graphData['nodes'].length === 0
              }
              icon={'beenHere'}
              text={fieldBuilderLookup['confirmButton']['text']} />
          </a>
        </div>
      </SecondaryHeading>
      <MicrocopyHeading text={fieldBuilderLookup['microcopyHeading']['text']} />

      <div className="standard_flex_between">
        {/* Select an item with the filter */}
        <div className="standard_select-left_pane standard_min_height">
          <CustomCardSearch
            type={'field-builder'}
            selectType={'single'}
            data={possibleData ? possibleData : {}}
            selectedComponents={[]}
            updateRequestData={updateRequestData}
            chooseCard={(data, type, context) => chooseCard(data, type, context)}
            cardImg={cardImg}
            emptyText={selectTypeLookup['field-builder']['cardFilter']['emptyText']}
            filterText={selectTypeLookup['field-builder']['cardFilter']['filterText']} />
        </div>

        {/* View the graph */}
        <div className="standard_flex_column standard_flex_start standard_select-right_pane">
          <div className="standard_flex_around standard_min_height">
            {graphData['nodes'].length === 0 && (
              <div className="standard_flex_column standard_flex_around">
                <SecondaryHeading text={fieldBuilderLookup['selectText']['emptyText']} />
              </div>
            )}

            {graphData['nodes'].length > 0 && (
              <div className="standard_flex_column standard_flex_start">
                <Form>

                  <FormHeading text={'Describe the Field'} />
                  <Form.Group controlId="display_name">
                    <Form.Control
                      type="text"
                      value={formValues['display_name']}
                      placeholder="Field Name"
                      onChange={() => setFieldFormValues({...formValues, display_name: display_name['value']})}/>
                  </Form.Group>

                </Form>
                <FieldGraph
                  data={graphData}
                  dimensions={dimensions}
                  mutable={true}
                  drawEdge={drawEdge}
                  config={fieldBuilderLookup['config']} />
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

export default NewField;
