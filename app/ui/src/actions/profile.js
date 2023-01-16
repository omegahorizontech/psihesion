import { LOADING, ERROR } from './index';
import { getProfile, getProfiles } from '../services/api';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_PROFILES = 'SET_PROFILES';

export const grabProfile = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const record = await getProfile(id); // IDEA: 'id' needs to be defined here
    dispatch({
      type: SET_PROFILE,
      payload: record.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const grabProfiles = (data) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const records = await getProfiles(data);
    dispatch({
      type: SET_PROFILES,
      payload: records.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
