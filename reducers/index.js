import { combineReducers } from 'redux';
import { selectedDate } from './selectedDateReducer';

export const rootReducer = combineReducers({
  selectedDate,
});
