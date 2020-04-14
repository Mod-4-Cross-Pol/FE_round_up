import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export function FullEventCard({ route }) {
  const { event } = route.params

  const onCountMeInButtonPress = () => {
    Alert.alert('Welcome to the Party! 🤙')
  }

  // const findDisplayTime = (eventTime) => {
  //   let newTime = parseInt(eventTime.toString().substring(0,2));
  //   let hours = ((newTime + 11) % 12) + 1;
  //   let ampm = newTime > 11 ? 'pm' : 'am';
  //   let minutes = eventTime.toString().substring(2);
  //   return hours + ':' + minutes + ampm;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{event.activity}</Text>

      <View style={styles.lineItem}>
        <Text style={styles.label}>LOCATION:</Text>
        <Text style={styles.text}>{event.location}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>START TIME:</Text>
        <Text style={styles.text}>{event.start_time}</Text>
        {/* <Text style={styles.text}>{findDisplayTime(event.start_time)}</Text> */}
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>DURATION</Text>
        <Text style={styles.text}>{event.duration}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}># ATTENDING:</Text>
        <Text style={styles.text}>{event.current_participant_count}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}># REQUIRED:</Text>
        <Text style={styles.text}>{event.max_participant_count}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>SKILL LEVEL:</Text>
        <Text style={styles.text}>{event.skill_level}</Text>
      </View>

      <View style={styles.lineItem}>
      <Text style={styles.label}>EQUIPMENT:</Text>

        <View>
          {event.equipment.split(',').map(e => {
            return <Text style={styles.equipmentList}>• {e}</Text>
          })}
        </View>
      </View>

      <TouchableOpacity onPress={onCountMeInButtonPress} style={styles.countMeInButton}><Text style={styles.buttonText}>COUNT ME IN!</Text></TouchableOpacity>
      <Text style={styles.signedUpMessage}>You Are Not Currently</Text>
      <Text style={styles.signedUpMessage}>Signed Up For This Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#0060b4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineItem: {
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFF'
  },
  label: {
    fontSize: 20,
    paddingTop: 13
  },
  text: {
    fontSize: 27,
    marginVertical: 5,
    color: '#FFF'
  },
  countMeInButton: {
    backgroundColor: '#FFF',
    height: 50,
    width: '40%',
    borderRadius: 25,
    margin: 15,
    backgroundColor: '#28BFBD',
    borderWidth: 6,
    borderColor: '#dee500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signedUpMessage: {
    fontSize: 20,
    color: '#dee500'
  },
  equipmentList: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF'
  },
  buttonText: {
    fontSize: 18
  }

});

export default FullEventCard;
