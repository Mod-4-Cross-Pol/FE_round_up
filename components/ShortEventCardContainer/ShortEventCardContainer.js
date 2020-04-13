import React from 'react';
import ShortEventCard from '../ShortEventCard/ShortEventCard';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function ShortEventCardContainer({ navigation, events }) {
  if (!events.length) {
    return (
      <View style={styles.noEventsMessageContainer}>
        <View style={styles.textBox}>
          <Text style={styles.noEventsMessage}>Bummer!</Text>
          <Text style={styles.noEventsMessage}>Looks like there are no events for that activity planned today.</Text>
        </View>
      </View>
    )
  }
  let eventCards = events.map(event => <ShortEventCard
    activity={event.activity}
    location={event.location}
    time={event.start_time}
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
    backgroundColor: '#0060b4',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,

  },
  noEventsMessageContainer: {
    height: '100%',
    backgroundColor: '#0060b4',
    alignItems: 'center'
  },
  textBox: {
    width: '80%',
    marginTop: 40
  },
  noEventsMessage: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10
  }
});
