import { LOADING } from '../actions/index';
import { SET_PROFILE, SET_PROFILES } from '../actions/profile';

const DEFAULT_STATE = {
  currentRecord: {},
  profiles: []
};

const reducer = (state = DEFAULT_STATE, action) => {
  if (action.error) return state;

  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        currentProfile: action.payload
      };
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
