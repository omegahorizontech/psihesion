import { LOADING } from '../actions/index';
import { UPDATE_FIELD_LIST } from '../actions/field';

const DEFAULT_STATE = {
  possibleFields: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case UPDATE_FIELD_LIST:
      return {
        ...state,
        possibleFields: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
