import React, { useState, useEffect } from 'react';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Map from '../../components/Map/Map';
import FilterByDate from '../../components/FilterByDate/FilterByDate';
import FilterByActivity from '../../components/FilterByActivity/FilterByActivity';
import ShortEventCardContainer from '../../components/ShortEventCardContainer/ShortEventCardContainer';
import DisplaySelectedDate from '../../components/DisplaySelectedDate/DisplaySelectedDate';
import { StyleSheet, View, Text } from 'react-native';
import { fetchEvents } from '../../apiCalls';

export default function Dashboard({ navigation }) {

  const [ events, setEvents ] = useState([])
  const [ filterValue, setFilterValue ] = useState('')
  const [ dateViewing, setDateViewing ] = useState('')

  let mockEvents = [
    {
      id: 1,
      date: 20200415,
      start_time: 1900,
      duration: "00:30",
      unix_time: 1587315600,
      activity: "Volleyball",
      location: "Wash Park",
      lat: 39.700,
      long: -104.973,
      notes: "If the weather is poor, meet here instead",
      max_players: 10,
      players_going: 5,
      skill_level: "Professional",
      equipment: [ "Net", "Ball" ]
    },
    {
      id: 2,
      date: 20200415,
      start_time: 1700,
      duration: "02:00",
      unix_time: 1587315600,
      activity: "Spike ball",
      location: "Cheeseman Park",
      lat: 39.731,
      long: -104.973,
      notes: "If the weather is poor, meet here instead",
      max_players: 4,
      players_going: 4,
      skill_level: "Just for fun!",
      equipment: [ "Net", "Ball" ]
    },
    {
      id: 3,
      date: 20200415,
      start_time: 2000,
      duration: "01:30",
      unix_time: 1586980800,
      activity: "Kickball",
      location: "Pepsi Center",
      lat: 39.748,
      long: -105.009,
      notes: "If the weather is poor, meet here instead",
      max_players: 20,
      players_going: 10,
      skill_level: "Beginner",
      equipment: [ "Bases", "Ball" ]
    },
    {
      id: 4,
      date: 20200415,
      start_time: 1200,
      duration: "06:00",
      unix_time: 1586952000,
      activity: "Bocce ball",
      location: "City Park",
      lat: 39.761,
      long: -105.012,
      notes: "We shall compete until the beer runs out!",
      max_players: 25,
      players_going: 8,
      skill_level: "Advanced",
      equipment: [ "Beer goggles", "Enthusiasm" ]
    }
  ]

  useEffect(() => {
    fetchEvents()
      .then(data => setEvents(data.data))
  }, [])

  const setFilter = (value) => {
    return setFilterValue(value)
  }

  const filterEvents = (value) => {
    if (value === '' || value === 'Show all events') {
      return events
    }
    let filteredEvents = events.filter(event => {
      return event.activity === value
    })
    return filteredEvents
  }

  return (
    <View>
      <HeaderNav navigation={navigation}/>
      <Map navigation={navigation} events={filterEvents(filterValue)}/>
      <FilterByActivity events={filterEvents(filterValue)} setFilter={setFilter}/>
      <ShortEventCardContainer navigation={navigation} events={filterEvents(filterValue)}/>
    </View>
  );

}
