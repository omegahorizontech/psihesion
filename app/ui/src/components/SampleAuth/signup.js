import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE } from '../../config/routes'

import { signupUser } from '../../actions/user';
import { resetError } from '../../actions';

import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../General/custom-button'
import ForgotPassword from './forgot-password'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const Signup = ({ general, updateActiveForm }) => {
  const dispatch = useDispatch();
  // Reset any errors when rerendering this page for the first time
  useEffect(() => {
    dispatch(resetError(formValues))
  }, [dispatch]);

  const { loading, error } = general;

  const defaultFormValues = {
    "fullName": "",
    "email": "",
    "password": "",
  }
  const [formValues, setFormValues] = useState(defaultFormValues);

  const onButtonClick = () => {
    dispatch(signupUser(formValues))
  };

  return (
    <>
      <div className="standard_container standard_flex_around">
        <Form className="standard_form">
          <Form.Group controlId="fullName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formValues['fullName']}
              placeholder="Name"
              onChange={() => setFormValues({...formValues, fullName: fullName['value']})}/>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>E-mail Address</Form.Label>
            <Form.Control
              type="email"
              value={formValues['email']}
              placeholder="E-mail"
              onChange={() => setFormValues({...formValues, email: email['value']})}/>
            <Form.Text className="standard_muted_message">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={formValues['password']}
              placeholder="Password"
              onChange={() => setFormValues({...formValues, password: password['value']})}/>
          </Form.Group>

          <div className="standard_flex_between">
            <a className="standard_pointer no_margin no_visibility" onClick={() => {updateActiveForm('forgotPassword')}}>
              Forgot Password?
            </a>
            <a className="standard_pointer no_margin text_center" onClick={() => {updateActiveForm('login')}}>
              Current user? <br/> Log In!
            </a>
            <a className={!loading ? "standard_pointer" : "standard_loading"}>
              <CustomButton
                onClick={onButtonClick}
                loading={loading}
                icon={'signupCard'}
                text={'Sign Up'}/>
            </a>
          </div>
          <div className="standard_error_message standard_form_error_message">
            { error }
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
