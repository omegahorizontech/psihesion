import { combineReducers } from 'redux';
import general from './general';
import user from './user';
import profile from './profile';
import node from './node';
import edge from './edge';
import relationship from './relationship';
import field from './field';
import filter from './filter';

export default combineReducers({
  // Add reducers in this decomposition
  general,
  user,
  profile,
  node,
  edge,
  relationship,
  field,
  filter,
});
