import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet, View, Button, Text, TextInput, Alert } from 'react-native';

export default function CreateEventForm(props) {

  const [ nameOfActivity, setNameOfActivity ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ startTime, setStartTime ] = useState('')
  const [ endTime, setEndTime ] = useState('')
  const [ playersRequired, setPlayersRequired ] = useState('')
  const [ currentlyAttending, setCurrentlyAttending ] = useState('')
  const [ skillLevel, setSkillLevel ] = useState('')
  const [ equipmentRequired, setEquipmentRequired ] = useState('')
  const [ notes, setNotes ] = useState('')

  const validateInputs = () => {

  }

  const verifyEndTimeIsAfterStartTime = () => {

  }

  const verifyFieldsAreNotEmpty = () => {
    if ( !nameOfActivity || !location || !startTime || !endTime ||
         !playersRequired || !currentlyAttending || !skillLevel ||
         !equipmentRequired ) {
      return false
    } else {
      return true
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CREATE A NEW EVENT</Text>

      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Name of Activity:</Text>
        <ModalDropdown
          renderButtonText={nameOfActivity => setNameOfActivity(nameOfActivity)}
          textStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownTextStyle}
          defaultValue='>> select activity <<'
          options={['Volleyball', 'Spikeball', 'Baseball', 'Basketball', 'Horseshoes', 'Beer Olympics']}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder='Location...'
        onChangeText={location => setLocation(location)}
        value={location}
      />

      <TextInput style={styles.input} placeholder='Date...(NEEDS DATEPICKER)'/>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Start Time:</Text>
          <ModalDropdown
            renderButtonText={startTime => setStartTime(startTime)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select time <<'
            options={['6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM','11:00AM', '11:30AM', '12:00PM', '12:30PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM','10:00PM' ]}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>End Time:</Text>
          <ModalDropdown
            renderButtonText={endTime => setEndTime(endTime)}
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select time <<'
            disabled={true}
            options={['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM','10:00PM' ]}
          />
        </View>
      </View>

      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        placeholder='Total Players Required...'
        onChangeText={playersRequired => setPlayersRequired(playersRequired)}
        value={playersRequired}
        keyboardType={'numeric'}
      />

      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        placeholder='Players Currently Attending...'
        onChangeText={currentlyAttending => setCurrentlyAttending(currentlyAttending)}
        value={currentlyAttending}
        keyboardType={'numeric'}
      />

      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Skill Level:</Text>
        <ModalDropdown
          renderButtonText={skillLevel => setSkillLevel(skillLevel)}
          textStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownTextStyle}
          defaultValue='>> select skill level <<'
          options={['just for fun', 'beginner', 'intermediate', 'advanced']}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder='Equipment Reqired...'
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28BFBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: '90%',
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
