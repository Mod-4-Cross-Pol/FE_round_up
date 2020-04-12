export const selectedDate = (state = 'empty', action) => {
  switch(action.type) {
    case 'SAVE_SELECTED_DATE':
      return action.selectedDate
    default:
      return state;
  }
}
