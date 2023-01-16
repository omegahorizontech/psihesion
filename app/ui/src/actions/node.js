import { LOADING, ERROR } from './index';
import { getNodes, postNode } from '../services/api';

export const UPDATE_NODE_LIST = 'UPDATE_NODE_LIST';
export const SET_PROFILES = 'SET_PROFILES';

export const updateNodeList = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const nodeList = await getNodes();
    dispatch({
      type: UPDATE_NODE_LIST,
      payload: nodeList.data.nodes,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const addNode = (node) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    await postNode(node);
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
