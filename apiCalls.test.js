import { fetchEvents } from './apiCalls';
import { fetchPOSTnewEvent } from './apiCalls';
import { fetchDELETEevent } from './apiCalls';
import { fetchPATCHevent } from './apiCalls';
import { convertDate } from './apiCalls';

describe('fetchEvents', () => {

  let mockResponse = [{
    activity: "Biking",
    current_participant_count: 3,
    date: "2020-04-20",
    description: "riding the bike",
    duration: "2:00",
    equipment: "helmet",
    id: 7,
    lat_long: "39.761,-105.012",
    location: "wash park",
    max_participant_count: 12,
    skill_level: "just for fun!",
    start_time: "01:00PM"
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  test('should call fetch with the correct url', () => {
    const date = 'Tue Apr 14 2020'
    fetchEvents(date)
    expect(window.fetch).toHaveBeenCalledWith(`https://game-on-pro.herokuapp.com/api/v1/events?date=2020-04-14`)
  });

  it('should return an array of events', () => {
    const date = 'Tue Apr 14 2020'
    fetchEvents(date)
      .then(events => expect(events).toEqual(mockResponse));
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: fetchEvents throw error'))
    })
    const date = 'Tue Apr 14 2020'
    expect(fetchEvents(date)).rejects.toEqual(Error('200 status code not found: fetchEvents throw error'))
  });

});

describe('fetchPOSTnewEvent', () => {

  let mockResponse = [{
    activity: "Biking",
    current_participant_count: 3,
    date: "2020-04-20",
    description: "riding the bike",
    duration: "2:00",
    equipment: "helmet",
    id: 7,
    lat_long: "39.761,-105.012",
    location: "wash park",
    max_participant_count: 12,
    skill_level: "just for fun!",
    start_time: "01:00PM"
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  test('should call fetch with the correct url', () => {
    const mockOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"}
    }
    const nameOfActivity = 'Biking'
    const currentlyAttending = '3'
    const date = 'Tue Apr 14 2020'
    const notes = 'riding the bike'
    const duration = '2:00'
    const equipmentRequired = 'helmet'
    const location = 'wash park'
    const playersRequired = '12'
    const startTime = '01:00PM'
    const skillLevel = 'just for fun!'
    fetchPOSTnewEvent(nameOfActivity, currentlyAttending, date, notes, duration, equipmentRequired, location, playersRequired, startTime, skillLevel)
    expect(window.fetch).toHaveBeenCalledWith(`https://game-on-pro.herokuapp.com/api/v1/events?activity=${nameOfActivity}&current_participant_count=${currentlyAttending}&date=2020-04-14&description=${notes}&duration=${duration}&equipment=${equipmentRequired}&location=${location}&max_participant_count=${playersRequired}&start_time=${startTime}&skill_level=${skillLevel}`, mockOptions)
  });

  test('should return an array of events', () => {
    const date = 'Tue Apr 14 2020'
    const nameOfActivity = 'Biking'
    const currentlyAttending = '3'
    const notes = 'riding the bike'
    const duration = '2:00'
    const equipmentRequired = 'helmet'
    const location = 'wash park'
    const playersRequired = '12'
    const startTime = '01:00PM'
    const skillLevel = 'just for fun!'
    fetchPOSTnewEvent(nameOfActivity, currentlyAttending, date, notes, duration, equipmentRequired, location, playersRequired, startTime, skillLevel)
      .then(events => expect(events).toEqual(mockResponse));
  });

  test('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: fetchPOSTnewEvent throw error'))
    })
    const date = 'Tue Apr 14 2020'
    const nameOfActivity = 'Biking'
    const currentlyAttending = '3'
    const notes = 'riding the bike'
    const duration = '2:00'
    const equipmentRequired = 'helmet'
    const location = 'wash park'
    const playersRequired = '12'
    const startTime = '01:00PM'
    const skillLevel = 'just for fun!'
    expect(fetchPOSTnewEvent(nameOfActivity, currentlyAttending, date, notes, duration, equipmentRequired, location, playersRequired, startTime, skillLevel)).rejects.toEqual(Error('200 status code not found: fetchPOSTnewEvent throw error'))
  });

});

describe('fetchDELETEevent', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  test('should fetch with correct url', () => {
    const mockID = '3'
    const mockOptions = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }
    fetchDELETEevent(mockID)
    expect(window.fetch).toHaveBeenCalledWith(`https://game-on-pro.herokuapp.com/api/v1/events/${mockID}`, mockOptions)
    })

  test('should return a 204 status', () => {
    let mockResponse = {status: 204}
    const mockID = '3'
    fetchDELETEevent(mockID)
      .then(message => expect(message).toEqual(mockResponse))
  });

  test('should return an error if the response is not okay', () => {
    const mockID = '3'
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('There was an error making your delete request'))
    })
    expect(fetchDELETEevent(mockID)).rejects.toEqual(Error('There was an error making your delete request'))
  });

})

describe('fetchPATCHevent', () => {

  let mockResponse = [{
    activity: "Biking",
    current_participant_count: 3,
    date: "2020-04-20",
    description: "riding the bike",
    duration: "2:00",
    equipment: "helmet",
    id: 7,
    lat_long: "39.761,-105.012",
    location: "wash park",
    max_participant_count: 12,
    skill_level: "just for fun!",
    start_time: "01:00PM"
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  test('should call fetch with the correct url', () => {
    const mockOptions = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"}
    }
    const mockID = '04'
    fetchPATCHevent(mockID)
    expect(window.fetch).toHaveBeenCalledWith(`https://game-on-pro.herokuapp.com/api/v1/events/${mockID}`, mockOptions)
  });

  test('should return an array of events', () => {
    const mockID = '04'
    fetchPATCHevent(mockID)
      .then(events => expect(events).toEqual(mockResponse));
  });

  test('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: fetchPATCHevent throw error'))
    })
    const mockID = '04'
    expect(fetchPATCHevent(mockID)).rejects.toEqual(Error('200 status code not found: fetchPATCHevent throw error'))
  });

});

describe('convertDate', () => {

  test('restructures data when passed through', () => {
    const mockDate = 'Tue Apr 14 2020'
    const expected = '2020-04-14'
    expect(convertDate(mockDate)).toEqual(expected)
  })

});
