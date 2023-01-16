import { LOADING, ERROR, RESET_ERROR } from '../actions/index';
import { SET_USER } from '../actions/user';

const DEFAULT_STATE = {
  error: false,
  loading: false,
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        ...DEFAULT_STATE,
      }
    default:
      return state;
  }
};

export default reducer;
