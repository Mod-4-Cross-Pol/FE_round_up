export const updateTrigger = (state = false, action) => {
  switch(action.type) {
    case 'TRIGGER_UPDATE':
      return !state
    default:
      return state;
  }
}
