import React, { useState, useEffect } from 'react';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Map from '../../components/Map/Map';
import FilterByDate from '../../components/FilterByDate/FilterByDate';
import FilterByActivity from '../../components/FilterByActivity/FilterByActivity';
import ShortEventCardContainer from '../../components/ShortEventCardContainer/ShortEventCardContainer';
import DisplaySelectedDate from '../../components/DisplaySelectedDate/DisplaySelectedDate';
import { StyleSheet, View, Text } from 'react-native';
import { fetchEvents } from '../../apiCalls';
import { connect } from 'react-redux';

export function Dashboard( props ) {

  const [ events, setEvents ] = useState([])
  const [ filterValue, setFilterValue ] = useState('')
  const [ dateViewing, setDateViewing ] = useState('')


  useEffect(() => {
    fetchEvents(props.selectedDate)
      .then(data => setEvents(data.data))
  }, [props.selectedDate])

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
      <HeaderNav navigation={props.navigation}/>
      <Map navigation={props.navigation} events={filterEvents(filterValue)}/>
      <FilterByActivity events={filterEvents(filterValue)} setFilter={setFilter}/>
      <ShortEventCardContainer navigation={props.navigation} events={filterEvents(filterValue)}/>
    </View>
  );

}

export const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
});

export default connect(mapStateToProps)(Dashboard);
