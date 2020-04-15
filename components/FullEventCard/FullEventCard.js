import * as React from 'react';
import { fetchDELETEevent } from '../../apiCalls';
import { connect } from 'react-redux';
import { updateTrigger } from '../../actions/actions';
import { fetchPATCHevent } from '../../apiCalls';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Button } from 'react-native';

export function FullEventCard(props) {
  const { event } = props.route.params

  const onCountMeInButtonPress = () => {
    if (event.current_participant_count === event.max_participant_count) {
      Alert.alert('Sorry, this event is full.')
    } else {
      Alert.alert('Welcome to the Party! 🤙')
      fetchPATCHevent(event.id)
      props.updateTrigger()
      props.navigation.navigate('Dashboard')
    }
  }

  const convertDateToPrintMonth = data => {
    let dateKey = {
      '01': 'Jan', '02': 'Feb', '03': 'Mar',
      '04': 'Apr', '05': 'May', '06': 'Jun',
      '07': 'Jul', '08': 'Aug', '09': 'Sep',
      '10': 'Oct', '11': 'Nov', '12': 'Dec'
    }
  let array = data.split('-')
  return `${dateKey[array[1]]} ${array[2]} ${array[0]}`
  }

  const handleDeleteEvent = () => {
    Alert.alert('The event has been deleted!')
    fetchDELETEevent(event.id)
    props.updateTrigger()
    props.navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{event.activity}</Text>
      <Text style={styles.dateText}>{convertDateToPrintMonth(event.date)}</Text>

      <View style={styles.lineItem}>
        <Text style={styles.label}>LOCATION:</Text>
        <Text style={styles.text}>{event.location}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>START TIME:</Text>
        <Text style={styles.text}>{event.start_time}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>DURATION:</Text>
        <Text style={styles.text}>{event.duration}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>ATTENDING:</Text>
        <Text style={styles.text}>{event.current_participant_count}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>MAX PLAYERS:</Text>
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
            return <Text style={styles.equipmentList} key={Math.random()}>• {e}</Text>
          })}
        </View>
      </View>

      {!event.attending && <TouchableOpacity onPress={onCountMeInButtonPress} style={styles.countMeInButton}><Text style={styles.buttonText}>COUNT ME IN!</Text></TouchableOpacity>}
      {event.attending && <Text style={styles.NotSignedUpMessageTop}>You Are Signed Up </Text>}
      {event.attending && <Text style={styles.NotSignedUpMessageBottom}>For This Event!</Text>}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteEvent}><Text style={styles.deleteButtonText}>DELETE EVENT</Text></TouchableOpacity>
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
    marginBottom: 10,
    color: '#FFF'
  },
  label: {
    fontSize: 20,
    paddingTop: 13
  },
  dateText: {
    fontSize: 22,
    color: '#FFF',
    marginBottom: 10,
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
  },
  deleteButton: {
    height: 50,
    width: '40%',
    borderRadius: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  NotSignedUpMessageTop: {
    fontSize: 20,
    color: '#dee500',
    marginTop: 40
  },
  NotSignedUpMessageBottom: {
    fontSize: 20,
    color: '#dee500'
  }

});

export const mapDispatchToProps = (dispatch) => ({
  updateTrigger: () => dispatch(updateTrigger())
})

export default connect(null, mapDispatchToProps)(FullEventCard);
