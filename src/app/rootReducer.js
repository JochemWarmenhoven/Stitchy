import { combineReducers } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterSliceReducer,
});

export default rootReducer;
