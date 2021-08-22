import { combineReducers } from 'redux';
import authReducers from './reducers/authReducers';
import bankReducers from './reducers/bankReducer';
import branchesReducer from './reducers/branchReducer';
import homeReducer from './reducers/homeReducer';
import newReducer from './reducers/newReducer';
import donaReducer from './reducers/donaReducer';

export default combineReducers({
  authReducers,
  bankReducers,
  branchesReducer,
  homeReducer,
  newReducer,
  donaReducer
});