import { LOADING } from '../actions/index';
import { UPDATE_EDGE_LIST } from '../actions/edge';

const DEFAULT_STATE = {
  possibleEdges: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case UPDATE_EDGE_LIST:
      return {
        ...state,
        possibleEdges: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
