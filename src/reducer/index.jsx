import counterReducer from './Counters';
import IsLoggedReducer from './IsLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counting: counterReducer,
  logging: IsLoggedReducer,
});

export default allReducers();
