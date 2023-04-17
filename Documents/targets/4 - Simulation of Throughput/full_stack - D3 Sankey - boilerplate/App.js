// React Component
// (at root of /src)

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import axios from 'axios';

import './App.css';
import Flow from './components/Flow';

import {
  ROOT_ROUTE,
  FLOW_ROUTE
} from './config/routes';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path={`${FLOW_ROUTE}/:fileName`} element={
              <Flow />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;