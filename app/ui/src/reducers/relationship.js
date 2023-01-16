import { LOADING } from '../actions/index';
import { UPDATE_REL_LIST } from '../actions/relationship';

const DEFAULT_STATE = {
  possibleRels: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case UPDATE_REL_LIST:
      return {
        ...state,
        possibleRels: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
