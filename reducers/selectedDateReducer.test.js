import { selectedDate } from './selectedDateReducer';

describe('selectedDate', () => {

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

  it('should return the initial state if no state is provided', () => {
    const expected = new Date().toDateString();
    const result = selectedDate(undefined, new Date().toDateString());
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SAVE_SELECTED_DATE', () => {
    const mockDate = 'Tue Apr 14 2020'
    const mockState = new Date().toDateString();
    const mockAction = {
      type: 'SAVE_SELECTED_DATE',
      selectedDate: mockDate
    }
    const expected = 'Tue Apr 14 2020'
    const result = selectedDate(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
