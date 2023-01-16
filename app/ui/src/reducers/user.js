import { LOADING } from '../actions/index';
import { SET_USER } from '../actions/user';

const DEFAULT_STATE = {
  currentUser: { },
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
