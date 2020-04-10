import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Button, Text, TextInput, Alert, ScrollView } from 'react-native';

export default function CreateEventForm(props) {

  const [ nameOfActivity, setNameOfActivity ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ startTime, setStartTime ] = useState('')
  const [ duration, setDuration ] = useState('')
  const [ playersRequired, setPlayersRequired ] = useState('')
  const [ currentlyAttending, setCurrentlyAttending ] = useState('')
  const [ skillLevel, setSkillLevel ] = useState('')
  const [ equipmentRequired, setEquipmentRequired ] = useState('')
  const [ notes, setNotes ] = useState('')

  const [ date, setDate ] = useState(new Date(1598051730000));
  const [ mode, setMode ] = useState('date');
  const [ show, setShow ] = useState(false);

  const allTimes = ['6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM','11:00AM', '11:30AM', '12:00PM', '12:30PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:00PM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM' ]

  const validateInputs = () => {
    if (verifyFieldsAreNotEmpty()) {
      if (verifyTotalPlayersIsGreaterThanAttending()) {
        Alert.alert('GOOD TO GO! 👍')
      } else {
        Alert.alert('Total Players Must Be Greater Than Players Attending!')
      }
    } else {
      Alert.alert('Please Fill Out All Fields!')
    }
  }

  const verifyTotalPlayersIsGreaterThanAttending = () => {
    let playersRequiredNum = parseInt(playersRequired)
    let currentlyAttendingNum = parseInt(currentlyAttending)
    if (playersRequiredNum <= currentlyAttending) {
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
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
            renderButtonText={nameOfActivity => setNameOfActivity(nameOfActivity)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
            options={['Baseball', 'Basketball', 'Biking', 'Bocce ball', 'Climbing', 'Croquet', 'Disc golf', 'Fishing', 'Football', 'Hand ball', 'Kickball', 'Outdoor exercising', 'Slacklining', 'Soccer', 'Spike ball', 'Tennis', 'Trail hiking/walking', 'Ultimate frisbee', 'Volleyball']}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Skill Level:</Text>
          <ModalDropdown
            renderButtonText={skillLevel => setSkillLevel(skillLevel)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
            options={['just for fun', 'beginner', 'intermediate', 'advanced']}
          />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Start Time:</Text>
          <ModalDropdown
            renderButtonText={startTime => setStartTime(startTime)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
            options={allTimes}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Duration:</Text>
          <ModalDropdown
            renderButtonText={duration => setDuration(duration)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
            options={['00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00', '02:15', '02:30', '02:45', '03:00', '03:15', '03:30', '03:45', '04:00', '04:15', '04:30', '04:45', '05:00', '05:15', '05:30', '05:45', '06:00']}
          />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Total Players:</Text>
          <ModalDropdown
            renderButtonText={playersRequired => setPlayersRequired(playersRequired)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
            options={['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Attending:</Text>
          <ModalDropdown
            renderButtonText={currentlyAttending => setCurrentlyAttending(currentlyAttending)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select <<'
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
          onChangeText={equipmentRequired => setEquipmentRequired(equipmentRequired)}
          value={equipmentRequired}
        />
        <TextInput
          style={styles.input}
          placeholder='Notes...'
          onChangeText={notes => setNotes(notes)}
          value={notes}
        />
        <View style={styles.createEventButton}><Button onPress={validateInputs} title='create event!'/></View>
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
    justifyContent: 'center'
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
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: '78%',
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  },
  dropdownText: {
    fontSize: 20,
    backgroundColor: '#fff'
  },
  dropdownTextStyle: {
    fontSize: 20,
    width: 150
  },
  createEventButton: {
    backgroundColor: '#FFF',
    marginTop: 20,
    height: 50,
    width: '50%',
    borderRadius: 25,
    paddingTop: 5
  }
});
