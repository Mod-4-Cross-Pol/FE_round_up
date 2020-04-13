export const selectedDate = (state = new Date().toDateString(), action) => {
  switch(action.type) {
    case 'SAVE_SELECTED_DATE':
      return action.selectedDate
    default:
      return state;
  }
}
