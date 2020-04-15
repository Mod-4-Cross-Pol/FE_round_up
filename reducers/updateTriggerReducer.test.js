import { updateTrigger } from './updateTriggerReducer';

describe('updateTrigger', () => {

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

  it('should return the initial state if no state is provided', () => {
    const expected = false
    const result = updateTrigger(undefined, false);
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is TRIGGER_UPDATE', () => {
    const mockState = false
    const mockAction = {
      type: 'TRIGGER_UPDATE'
    }
    const expected = true
    const result = updateTrigger(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
