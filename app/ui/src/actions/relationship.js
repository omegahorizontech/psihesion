import { LOADING, ERROR } from './index';
import { getRels, postRel } from '../services/api';

export const UPDATE_REL_LIST = 'UPDATE_REL_LIST';

export const updateRelList = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const relList = await getRels();
    dispatch({
      type: UPDATE_REL_LIST,
      payload: relList.data.relationships,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const addRel = (node, edge) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    await postRel({
      node: node,
      edge: edge
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
