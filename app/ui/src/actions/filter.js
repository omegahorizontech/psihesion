import { LOADING, ERROR } from './index';
import { getFilters, postFilter } from '../services/api';

export const UPDATE_FILTER_LIST = 'UPDATE_FILTER_LIST';

export const updateFilterList = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const filterList = await getFilters();
    dispatch({
      type: UPDATE_FILTER_LIST,
      payload: filterList.data.filters,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const addFilter = (filter) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    await postFilter(filter);
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
