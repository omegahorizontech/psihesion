import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE } from '../../config/routes'

import { grabProfiles } from '../../actions/profile';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../General/custom-button'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'
import Overview from './overview'
import Search from './search'
// import Nodes from './nodes'
// import Edges from './edges'
// import Relationships from './relationships'
// import Fields from './fields'
// import Filters from './filters'
// import NewNode from './new-node'
// import NewEdge from './new-edge'
// import NewRelationship from './new-relationship'
// import NewField from './new-field'
// import NewFilter from './new-filter'
// import SelectPsiComponenet from './select-psi-component'

import Form from 'react-bootstrap/Form';

const Discovery = ({ general }) => {
  const dispatch = useDispatch();

  const defaultRequestData = {
    node: [],
    edge: [],
    relationship: [],
    field: [],
    filter: [],
    "single-node": {},
    "single-edge": {},
    search: '',
  }

  const { loading, error } = general;
  const [requestData, setRequestData] = useState(defaultRequestData);
  const [activeSubPage, setActiveSubPage] = useState('overview');

  const updateActiveSubPage = (activeSubPage) => {
    setActiveSubPage(activeSubPage)
  };

  const updateRequestData = (key, data) => {
    switch (key) {
      case 'search':
      case 'single-edge':
      case 'single-node':
        setRequestData(() => ({...requestData, [key]: data}))
        break;
      case 'node':
      case 'edge':
      case 'relationship':
      // case 'viz-field':
      //   // To make the request more legible - viz-filed:field for requestData[key]
      //   key === 'viz-field' ? key = 'field' : key
      //   const currentIds = requestData[key].map((i) => i['_id']);
      //   if(currentIds.includes(data['_id'])) {
      //     let prevData = requestData[key]; // Easier to read 'prevData'

      //     // Use filter to avoid mutating the state directly
      //     setRequestData(() => ({...requestData, [key]: prevData.filter(function(d) {
      //         // 'd' is the filtered node, and 'data' is the event-clicked node
      //         return d['_id'] !== data['_id']
      //       })

      //     }))
      //   } else {
      //     setRequestData(() => ({...requestData, [key]: [...requestData[key], data]}))
      //   }
      //   break;
      // case 'filter':
      //   const a = requestData[key][0];
      //   const b = data;
      //   if (requestData[key].length > 0 && a === b) {
      //     setRequestData(() => ({...requestData, [key]: []}))
      //   } else {
      //     setRequestData(() => ({...requestData, [key]: [data]}))
      //   }
      //   break;
      default:
        break;
    }
  }

  const exploreButtonClick = () => {
    dispatch(grabProfiles(requestData))
  };

  return (
    <div>
      <div className="standard_flex_between">
        <div>
          <PrimaryHeading
            iconType={''}
            icon={'bioTech'}
            text={'Social Discovery'}>
          </PrimaryHeading>
          <MicrocopyHeading text={'Find opportunities automatically'} />
        </div>
        <div>
          <SecondaryHeading text={requestData['search']} />
        </div>
        <div>
        </div>
      </div>
      <div className="standard_container">
        <>
          { activeSubPage == 'overview' && (
            <Overview
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              exploreButtonClick={() => {exploreButtonClick()}}
            />
          )}

          { activeSubPage == 'search' && (
            <Search
              searchString={requestData['search']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}
{/*
          { activeSubPage == 'nodes' && (
            <Nodes
              selectedNodes={requestData['node']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'edges' && (
            <Edges
              selectedEdges={requestData['edge']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'relationships' && (
            <Relationships
              selectedRels={requestData['relationship']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'fields' && (
            <Fields
              selectedFields={requestData['field']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'filter' && (
            <Filters
              selectedFilters={requestData['filter']}
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'newNode' && (
            <NewNode
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'newEdge' && (
            <NewEdge
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'newRelationship' && (
            <NewRelationship
              general={general}
              selectedNode={requestData['single-node']}
              selectedEdge={requestData['single-edge']}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'newField' && (
            <NewField
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'newFilter' && (
            <NewFilter
              general={general}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'selectPsiNode' && (
            <SelectPsiComponenet
              general={general}
              type={'node'}
              selectedComponent={requestData['single-node']}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}

          { activeSubPage == 'selectPsiEdge' && (
            <SelectPsiComponenet
              general={general}
              type={'edge'}
              selectedComponent={requestData['single-edge']}
              updateActiveSubPage={(name) => {updateActiveSubPage(name)}}
              updateRequestData={(key, data) => {updateRequestData(key, data)}}
            />
          )}
*/}
        </>
      </div>
    </div>
  );
};

export default Discovery;
