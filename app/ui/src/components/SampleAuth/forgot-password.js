import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE } from '../../config/routes'

import { loginUser } from '../../actions/user';

import { useSelector, useDispatch } from 'react-redux';

import { MythIcon } from '../../icons/Icons';

import CustomButton from '../General/custom-button'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const ForgotPassword = ({ updateActiveForm }) => {

  return (
    <>
      <div className="standard_container standard_flex_around">
        <div className="standard_flex_between standard_flex_column">
          <div className="standard_flex_between standard_alert_error_message">
            <MythIcon name={'wizardBeard'}/>
            <div>Contact your wizard! An SMTP server isn't set up yet!</div>
          </div>
          <a className="standard_pointer no_margin" onClick={() => {updateActiveForm('login')}}>
            Back to Login
          </a>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
