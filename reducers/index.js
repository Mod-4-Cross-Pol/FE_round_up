import { combineReducers } from 'redux';
import { selectedDate } from './selectedDateReducer';
import { updateTrigger } from './updateTriggerReducer';

export const rootReducer = combineReducers({
  selectedDate,
  updateTrigger
});
