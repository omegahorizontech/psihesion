import { LOADING } from '../actions/index';
import { UPDATE_FILTER_LIST } from '../actions/filter';

const DEFAULT_STATE = {
  possibleFilters: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case UPDATE_FILTER_LIST:
      return {
        ...state,
        possibleFilters: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
