import { LOADING, ERROR } from './index';
import { getEdges, postEdge } from '../services/api';

export const UPDATE_EDGE_LIST = 'UPDATE_EDGE_LIST';

export const updateEdgeList = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const edgeList = await getEdges();
    dispatch({
      type: UPDATE_EDGE_LIST,
      payload: edgeList.data.edges,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const addEdge = (edge) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    await postEdge(edge);
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
