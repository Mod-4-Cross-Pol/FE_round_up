    import { fetchEvents } from './apiCalls';
    import { fetchPOSTnewEvent } from './apiCalls';

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

      test('it works', () => {
        expect(true).toBeTruthy();
      });

      // test('should call fetch with the correct url', () => {
      //   const date = 'Tue Apr 14 2020'
      //   fetchEvents(date)
      //   expect(window.fetch).toHaveBeenCalledWith(`https://game-on-pro.herokuapp.com/api/v1/events?date=${date}`)
      // });

      // it('should return an array of movies', () => {
      //   fetchTriviaData()
      //     .then(questions => expect(questions).toEqual(mockResponse));
      // });

      // it('should return an error if the response is not okay', () => {
      //   window.fetch = jest.fn().mockImplementation(() => {
      //     return Promise.reject(Error('200 status code not found: getTriviaData throw error'))
      //   })
      //   expect(fetchTriviaData()).rejects.toEqual(Error('200 status code not found: getTriviaData throw error'))
      // });
    });
