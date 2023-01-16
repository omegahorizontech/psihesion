import React, { useState } from 'react';

import { updateEdgeList } from '../../actions/edge';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../General/custom-button'
import { DiscoveryCard } from '../General/custom-card'
import PrimaryHeading, { SecondaryHeading, MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

/*
 *
 * IDEA: Refactor CardList into it's own 'custom-card-list.js' File
 *
 */
export const CardList = ({ type, selectType, data, currentIds, updateRequestData, chooseCard, cardImg }) => {

  /*
   * <DiscoveryCard type={findType()} /> renders the card data differently
   * based on the parent component that renders this <CardList />
   */
  const findType = (type, selectType, d) => {
    if (type.includes('builder')) { // Indicates a builder card list
      return selectType ? `${selectType}-${d['type']}` : d['type']
    }
    return selectType ? `${selectType}-${type}` : type
  }

  /*
   * <DiscoveryCard context={findContext()} /> allows the card to interact
   * with the parent component that renders this <CardList />
   */
  const findContext = (type) => {
    if (type.includes('builder')) { // Indicates a builder card list
      return type
    }
    return 'default'
  }

  return data.map((d) => {
    return <DiscoveryCard
      key={d['_id']['$oid']}
      data={d}
      type={findType(type, selectType, d)}
      context={findContext(type)}
      currentIds={currentIds}
      chooseCard={chooseCard}
      updateRequestData={updateRequestData}
      cardImg={cardImg} />
  })
}

const CustomCardSearch = ({
  type,
  selectType,
  data,
  selectedComponents,
  updateRequestData,
  chooseCard,
  cardImg,
  emptyText,
  filterText,
  defaultFilterTypes // IDEA: Add lookup for the filter types
}) => {
  const [query, setQuery] = useState('');

  let searchResult = [];

  // The 'searchResult' data updates specific to the type of the data
  const updateQuerySearch = (type, components) => {
    if (!query) {
      return components
    }
    switch (type) {
      case 'node':
        return components.filter(d => {
            return d['display_name'].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        break;
      case 'edge':
        return components.filter(d => {
            return d['value'].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        break;
      case 'relationship':
        return components.filter(d => {
            const title = (d['node']['display_name'].toLowerCase().indexOf(query.toLowerCase()));
            const text = (d['edge']['value'].toLowerCase().indexOf(query.toLowerCase()));
            return title !== -1 || text !== -1
        })
        break;
      case 'viz-field':
      case 'field':
        return components.filter(d => {
            if ('display_name' in d) {
              const title = (d['display_name'].toLowerCase().indexOf(query.toLowerCase()));
              const text = -1 // Not Implemented IDEA: d['text'].toLowerCase().indexOf(query.toLowerCase()));
              return (title !== -1 || text !== -1)
            }
        })
        break;
      case 'filter':
        return components.filter(d => {
            return d['display_text'].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        return components
        break;
      default:
        break;
    }
  }

  if (type.includes('builder')) { // Indicates a builder card list
    // For each list in the 'field-builder' data, check the type
    for (const [type, components] of Object.entries(data)) { // For each (key/value) pair
      searchResult = searchResult.concat(
        updateQuerySearch(type, components)
      ) // Add searchResult output for each type
    }
    /* IDEA: Filter by tag
     *
     if (filterTags.length) > 0 {
       searchResult = searchResult.filter((d) => filterTags.includes(d['tag'])) // Return results only if filterTags is correct
     }
     *
     */
    // Only filter by type if one is selected.
    if (defaultFilterTypes && defaultFilterTypes.length > 0) {
      searchResult = searchResult.filter((d) => defaultFilterTypes.includes(d['type'])) // Return results only if filterType is correct
    }
  } else {
    searchResult = updateQuerySearch(type, data) // 'data' === components
  }

  return (
    <>
      <Form.Group className="general--card-filter no_margin" controlId="query">
        <Form.Control
          type="text"
          value={query}
          placeholder={filterText}
          onChange={(e) => setQuery(e.target.value)}/>
      </Form.Group>
      <div className="standard_flex_start general--card_deck">
        { searchResult.length > 0 && (
          <CardList
            type={type}
            selectType={selectType}
            data={searchResult}
            currentIds={selectedComponents.map((i) => {
              if ("_id" in i) {
                return i['_id']['$oid']
              }
            })}
            updateRequestData={updateRequestData}
            chooseCard={chooseCard}
            cardImg={cardImg} />
        )}

        { data.length == 0 && (
          <SecondaryHeading text={emptyText} />
        )}

        { data.length != 0 && searchResult.length == 0 && (
          <SecondaryHeading text={'No results, try changing the filter'} />
        )}
      </div>
    </>
  )
}

export default CustomCardSearch;
