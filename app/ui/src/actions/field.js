import { LOADING, ERROR } from './index';
import { getFields, postField } from '../services/api';

export const UPDATE_FIELD_LIST = 'UPDATE_FIELD_LIST';

export const updateFieldList = () => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    const fieldList = await getFields();
    dispatch({
      type: UPDATE_FIELD_LIST,
      payload: fieldList.data.fields,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const addField = (field) => async (dispatch) => {
  await dispatch({ type: LOADING });
  try {
    await postField(field);
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
