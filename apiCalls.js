export const fetchEvents = (date) => {
  console.log('DATE TO FETCH', date)
  let desiredDate = convertDate(date)
  return fetch(`https://game-on-pro.herokuapp.com/api/v1/events?date=${desiredDate}`)
    .then(response => {
      if (!response.ok) {
        throw Error('200 status code not found: fetchEvents throw error')
      }
      return response.json()
    })
}

const convertDate = data => {
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