import { LOADING } from '../actions/index';
import { UPDATE_NODE_LIST } from '../actions/node';

const DEFAULT_STATE = {
  nodes: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    // IDEA: Extend actions, to segment types of nodes 
    case UPDATE_NODE_LIST:
      return {
        ...state,
        nodes: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
