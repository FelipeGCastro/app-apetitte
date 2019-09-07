import { combineReducers } from 'redux';

import { reducer as days } from './days';
import { reducer as user } from './user';

const reducers = combineReducers({
  days,
  user,
});

export default reducers;
