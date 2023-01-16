import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE } from '../../config/routes'

import { loginUser } from '../../actions/user';

import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../General/custom-button'
import PrimaryHeading from '../General/heading'
import Login from './login'
import Signup from './signup'
import ForgotPassword from './forgot-password'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const SampleAuth = ({ general }) => {
  const dispatch = useDispatch();
  const [activeForm, setActiveForm] = useState('login');

  const updateActiveForm = (activeFormName) => {
    setActiveForm(activeFormName)
  };

  return (
    <>
      <div>
        <PrimaryHeading
          icon={'lockSecure'}
          text={'Sample Auth'}>
          <Link to={ROOT_ROUTE}>
            <CustomButton icon={'arrowBack'} text={'Back'}/>
          </Link>
        </PrimaryHeading>
      </div>
      <>
        { activeForm == 'login' && (
          <Login
            general={general}
            updateActiveForm={(name) => {updateActiveForm(name)}}
          />
        )}

        { activeForm == 'signup' && (
          <Signup
            general={general}
            updateActiveForm={(name) => {updateActiveForm(name)}}
          />
        )}

        { activeForm == 'forgotPassword' && (
          <ForgotPassword updateActiveForm={(name) => {updateActiveForm(name)}}/>
        )}
      </>
    </>
  );
};

export default SampleAuth;
