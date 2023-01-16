import { LOADING, ERROR } from './index';
import { signup, login } from '../services/api';

export const SET_USER = 'SET_USER';

/*
 * IDEA: Write a general loading/error wrapper function - DRY idea
 */

export const signupUser = (data) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const user = await signup(data);
    dispatch({
      type: SET_USER,
      payload: user.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response ? err.response?.data?.error : 'Check the server connection',
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const user = await login(data);
    dispatch({
      type: SET_USER,
      payload: user.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response ? err.response?.data?.error : 'Check the server connection',
    });
  }
};
