import * as actions from './actions'

describe('actions', () => {

  test('should have a type SAVE_SELECTED_DATE', () => {
    const selectedDate = 'Tue Apr 14 2020'
    const expectedAction = {
      type: 'SAVE_SELECTED_DATE',
      selectedDate
    }
    const result = actions.saveSelectedDate(selectedDate)
    expect(result).toEqual(expectedAction)
  });

  test('should have a type TRIGGER_UPDATE', () => {
    const expectedAction = {
      type: 'TRIGGER_UPDATE'
    }
    const result = actions.updateTrigger()
    expect(result).toEqual(expectedAction)
  });

});
