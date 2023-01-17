import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE, DISCOVERY_ROUTE } from '../../config/routes'

import { grabProfiles } from '../../actions/profile';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import CustomCard from '../General/custom-card'
import { LargeCustomBorderlessButton, LargeCircleCustomButton } from '../General/custom-button'
import PrimaryHeading, { MicrocopyHeading } from '../General/heading'

import Form from 'react-bootstrap/Form';

const Overview = ({ general, updateActiveSubPage, exploreButtonClick }) => {
  const dispatch = useDispatch();

  const { loading, error } = general;


  // Clipping Mask IDEA: https://css-tricks.com/masking-vs-clipping-use/
  return (
    <div className="standard_flex_center standard_flex_column">
      <div id="overview--radial_glow"/>
      {/* TOP */}
      <div>
        <LargeCustomBorderlessButton
          onClick={() => {updateActiveSubPage('search')}}
          icon={'search'}
          iconType={'discovery'}
          borderRadius={"160px 160px 160px 160px"}
          text={'Search'} />
      </div>

      {/* MIDDLE */}
      <div className="standard_flex_between">
        <div className="standard_flex_center standard_flex_column">
          <LargeCustomBorderlessButton
            onClick={() => {updateActiveSubPage('nodes')}}
            icon={'nodes'}
            iconType={'discovery'}
            borderRadius={"160px 4px 160px 4px"}
            text={'Nodes'} />
          <LargeCustomBorderlessButton
            onClick={() => {updateActiveSubPage('edges')}}
            icon={'edges'}
            iconType={'discovery'}
            borderRadius={"4px 160px 4px 160px"}
            text={'Edges'} />
        </div>

        <div className="standard_flex_center">
          <div>
            <Link to={ROOT_ROUTE} onClick={exploreButtonClick}>
              <LargeCircleCustomButton
                icon={'loadingPlanet'}
                iconType={''}
                text={'Explore'} />
            </Link>
          </div>
        </div>

        <div className="standard_flex_center standard_flex_column">
          <LargeCustomBorderlessButton
            onClick={() => {updateActiveSubPage('relationships')}}
            icon={'relationships'}
            iconType={'discovery'}
            borderRadius={"4px 160px 4px 160px"}
            text={'Relationships'} />
          <LargeCustomBorderlessButton
            onClick={() => {updateActiveSubPage('fields')}}
            icon={'field'}
            iconType={'discovery'}
            borderRadius={"160px 4px 160px 4px"}
            text={'Field'} />
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <LargeCustomBorderlessButton
          onClick={() => {updateActiveSubPage('filter')}}
          icon={'filter'}
          iconType={'discovery'}
          borderRadius={"160px 160px 160px 160px"}
          text={'Filter'} />
      </div>
    </div>
  );
};

export default Overview;
