export const fetchEvents = () => {
  console.log('FETCHING EVENTS')
  return fetch("https://game-on-pro.herokuapp.com/api/v1/events")
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: fetchEvents throw error')
      }
      return response.json()
    })
}