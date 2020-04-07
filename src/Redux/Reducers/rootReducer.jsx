import { combineReducers } from 'redux';
import userReducer from './userReducer';


const state = {
  user: userReducer,
};

export default combineReducers(state);