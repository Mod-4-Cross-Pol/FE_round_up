import React from 'react';
import ShortEventCard from '../ShortEventCard/ShortEventCard';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function ShortEventCardContainer({ navigation, events }) {
  console.log(events)
  if (!events.length) {
    return <Text>Looks like there's no events planned for today!</Text>
  }
  let eventCards = events.map(event => <ShortEventCard
    activity={event.activity}
    location={event.location}
    time={event.time}
    event={event}
    navigation={navigation}/>)

  return (
    <ScrollView style={styles.scrollView}>
      {eventCards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#292c33',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
