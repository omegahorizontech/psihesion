import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Home from './components/Home';
import Discovery from './components/Discovery';
import SampleAuth from './components/SampleAuth';
import Bars from './components/General/bars';

import {
  ROOT_ROUTE,
  DISCOVERY_ROUTE,
  SAMPLE_AUTH_ROUTE,
} from './config/routes';

const App = () => {
  const { user, general } = useSelector((state) => state );
  
  return (
    <>
      <Router>
        <div className="general--main_area">
          <Bars user={user['currentUser']}/>
          <Routes>
            <Route exact path={ROOT_ROUTE} element={<Home/>} />
            <Route exact path={DISCOVERY_ROUTE} element={
              <Discovery general={general} />
            } />
            <Route exact path={SAMPLE_AUTH_ROUTE} element={
              <SampleAuth general={general} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
