export const fetchEvents = date => {
  let desiredDate = convertDate(date)
  return fetch(`https://game-on-pro.herokuapp.com/api/v1/events?date=${desiredDate}`)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: fetchEvents throw error')
      }
      return response.json()
    })
}

export const fetchPOSTnewEvent = (nameOfActivity, currentlyAttending, date, notes, duration, equipmentRequired, location, playersRequired, startTime, skillLevel) => {
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"}
  }
  let formatDate = convertDate(date)
  return fetch(`https://game-on-pro.herokuapp.com/api/v1/events?activity=${nameOfActivity}&current_participant_count=${currentlyAttending}&date=${formatDate}&description=${notes}&duration=${duration}&equipment=${equipmentRequired}&location=${location}&max_participant_count=${playersRequired}&start_time=${startTime}&skill_level=${skillLevel}`, options)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: fetchPOSTnewEvent throw error')
      }
      return response.json()
    })
}

export const fetchDELETEevent = id => {
  const options = {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`https://game-on-pro.herokuapp.com/api/v1/events/${id}`, options)
    .then(response => {
      if (!response.ok) {
        throw Error('There was an error making your delete request')
      }
      return response.json()
    })
}

export const fetchPATCHevent = id => {
  const options = {
    method: "PATCH",
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`https://game-on-pro.herokuapp.com/api/v1/events/${id}`, options)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: fetchPATCHevent throw error')
      }
      return response.json()
    })
}

export const convertDate = data => {
  let dateKey = {
    Jan: '01', Feb: '02', Mar: '03',
    Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09',
    Oct: '10', Nov: '11', Dec: '12'
  }
  let stringData = data.toString();
  let array = stringData.split(' ')
  return `${array[3]}-${dateKey[array[1]]}-${array[2]}`
}
