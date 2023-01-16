import { LOADING } from '../actions/index';
import { UPDATE_NODE_LIST } from '../actions/node';

const DEFAULT_STATE = {
  possibleNodes: [ ],
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case UPDATE_NODE_LIST:
      return {
        ...state,
        possibleNodes: action.payload ? action.payload : [ ],
      };
    default:
      return state;
  }
};

export default reducer;
