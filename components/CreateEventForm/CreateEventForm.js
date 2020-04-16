import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fetchPOSTnewEvent } from '../../apiCalls';
import { connect } from 'react-redux';
import { updateTrigger } from '../../actions/actions';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';

export function CreateEventForm(props) {

  const [ nameOfActivity, setNameOfActivity ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ startTime, setStartTime ] = useState('');
  const [ duration, setDuration ] = useState('');
  const [ playersRequired, setPlayersRequired ] = useState('');
  const [ currentlyAttending, setCurrentlyAttending ] = useState('');
  const [ skillLevel, setSkillLevel ] = useState('');
  const [ equipmentRequired, setEquipmentRequired ] = useState('');
  const [ notes, setNotes ] = useState('');
  const [ date, setDate ] = useState(new Date(Date.now()));
  const [ mode, setMode ] = useState('date');
  const [ show, setShow ] = useState(true);

  const allTimes = ['6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM','11:00AM', '11:30AM', '12:00PM', '12:30PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:00PM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM' ]

  const makePOSTrequest = () => {
    fetchPOSTnewEvent(nameOfActivity, currentlyAttending, date, notes, duration, equipmentRequired, location, playersRequired, startTime, skillLevel)
      .then(() => Alert.alert('Event Was Created! 🤙'))
      .then(() => props.updateTrigger())
      .then(() => props.navigation.navigate('Dashboard'))
      .catch(() => Alert.alert('Sorry, that location was not found. Please update the location and try again.'))
  }

  const onCreateEventPress = () => {
    if (equipmentRequired.split(',').length > 5) {
      return Alert.alert('Please limit your equipment to 5 items.')
    }
    if (nameOfActivity === "Custom" && !notes) {
      return Alert.alert("Please enter the name of your custom event in the 'Notes' section.")
    }
    if (verifyFieldsAreNotEmpty()) {
      if (verifyTotalPlayersIsGreaterThanAttending()) {
        makePOSTrequest()
      } else {
        Alert.alert('Total players must be greater than players attending!')
      }
    } else {
      Alert.alert('Please fill out all fields!')
    }
  }

  const verifyTotalPlayersIsGreaterThanAttending = () => {
    if (parseInt(playersRequired) <= parseInt(currentlyAttending)) {
      return false
    } else {
      return true
    }
  }

  const verifyFieldsAreNotEmpty = () => {
    if ( !nameOfActivity || !location || !startTime || !duration ||
         !playersRequired || !currentlyAttending || !skillLevel ||
         !equipmentRequired ) {
      return false
    } else {
      return true
    }
  }

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>CREATE  EVENT</Text>
        <Text style={styles.text}>Select Date:</Text>
      </View>

      <DateTimePicker
        style={styles.picker}
        testID="dateTimePicker"
        value={date}
        mode={mode}
        display="calender"
        onChange={onChange}
      />

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Activity:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={nameOfActivity => setNameOfActivity(nameOfActivity)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={['Baseball', 'Basketball', 'Biking', 'Bocce ball', 'Climbing', 'Croquet', 'Disc golf', 'Fishing', 'Football', 'Hand ball', 'Kickball', 'Outdoor exercising', 'Slacklining', 'Soccer', 'Spike ball', 'Tennis', 'Trail hiking/walking', 'Ultimate frisbee', 'Volleyball', 'Custom']}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Skill Level:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={skillLevel => setSkillLevel(skillLevel)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={['Just for fun!', 'Beginner', 'Intermediate', 'Advanced']}
          />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Start Time:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={startTime => setStartTime(startTime)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={allTimes}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Duration:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={duration => setDuration(duration)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={['30 min', '45 min', '1 hr', '1 hr 15 min', '1 hr 30 min', '1 hr 45 min', '2 hr', '2 hr 15 min', '2 hr 30 min', '2 hr 45 min', '3 hr', '3 hr 15 min', '3 hr 30 min', '3 hr 45 min', '4 hr', '4 hr 15 min', '4 hr 30 min', '4 hr 45 min', '5 hr', '5 hr 15 min', '5 hr 30 min', '5 hr 45 min', '6 hr']}
          />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Total Players:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={playersRequired => setPlayersRequired(playersRequired)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Attending:</Text>
          <ModalDropdown
            style={styles.modalDropdown}
            renderButtonText={currentlyAttending => setCurrentlyAttending(currentlyAttending)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='select'
            options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Name of Location...'
          onChangeText={location => setLocation(location)}
          value={location}
        />
        <TextInput
          style={styles.input}
          placeholder='Equipment (comma seperation)'
          onChangeText={equipmentRequired => setEquipmentRequired(equipmentRequired.toLowerCase())}
          value={equipmentRequired}
        />
        <TextInput
          style={styles.input}
          placeholder='Notes...'
          maxLength={14}
          onChangeText={notes => setNotes(notes)}
          value={notes}
        />
        {nameOfActivity === "Custom" && <Text style={styles.customActivityMessage}>*Please name your custom activity in notes*</Text>}
        <TouchableOpacity style={styles.createEventButton} onPress={onCreateEventPress} title='CREATE EVENT'><Text style={styles.buttonText}>CREATE EVENT</Text></TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 50
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28BFBD',
    justifyContent: 'center',
    paddingBottom: 30
  },
  inputContainer: {
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30,
    marginBottom: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: '#0060b4',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: '78%',
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    borderWidth: 4,
    borderColor: '#dee500',
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 80
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  },
  dropdownText: {
    fontSize: 20,
    color: '#000'
  },
  dropdownTextStyle: {
    fontSize: 20,
    width: 150,
  },
  createEventButton: {
    backgroundColor: '#FFF',
    marginTop: 20,
    height: 50,
    width: '50%',
    borderRadius: 25,
    borderWidth: 6,
    borderColor: '#dee500',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0060b4'
  },
  modalDropdown: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#dee500',
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF'
  },
  customActivityMessage: {
    color: '#FFF',
    fontSize: 20
  }

});

export const mapDispatchToProps = (dispatch) => ({
  updateTrigger: () => dispatch(updateTrigger())
})

export default connect(null, mapDispatchToProps)(CreateEventForm);
