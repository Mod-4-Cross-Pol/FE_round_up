import React from 'react';
import ShortEventCard from '../ShortEventCard/ShortEventCard';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export function ShortEventCardContainer({ navigation, events, isLoading }) {

  if (isLoading) {
    return (
      <View style={styles.noEventsMessageContainer}>
          <Text style={styles.loadingText}>loading...</Text>
      </View>
    )
  } else if (!events.length) {
    return (
      <View style={styles.noEventsMessageContainer}>
        <View style={styles.textBox}>
          <Text style={styles.noEventsMessage}>Bummer!</Text>
          <Text style={styles.noEventsMessage}>Looks like there are no events planned today.</Text>
        </View>
      </View>
    )
  }

  let eventCards = events.map(event => <ShortEventCard
    key={Math.random()}
    event={event}
    navigation={navigation}/>)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {eventCards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: 'auto',
    height: 300,
    backgroundColor: '#0060b4',
    padding: 20
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
  },
  loadingText: {
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40,
  }

});

export default ShortEventCardContainer;
