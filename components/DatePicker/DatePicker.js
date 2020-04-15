import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { saveSelectedDate } from '../../actions/actions';

export function DatePicker(props) {

  const [ date, setDate ] = useState(new Date(Date.now()));
  const [ mode, setMode ] = useState('date');
  const [ show, setShow ] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const navigateToDashboard = async () => {
    let displayDate = date.toString()
    displayDate = displayDate.split(' ').splice(0,4).join(' ')
    await props.saveSelectedDate(displayDate)
    props.navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>SELECT A DAY</Text>
      </View>
      <DateTimePicker
        style={styles.picker}
        testID="dateTimePicker"
        value={date}
        mode={mode}
        display="calender"
        onChange={onChange}
      />
      <View style={styles.selectDateButtonContainer}>
        <TouchableOpacity style={styles.selectDateButton} onPress={navigateToDashboard}><Text style={styles.buttonText}>SELECT DATE</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#28BFBD'
  },
  textBox: {
    height: 200,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  },
  picker: {
    marginTop: -100,
    height: 450
  },
  selectDateButton: {
    backgroundColor: '#FFF',
    height: 52,
    width: '45%',
    borderRadius: 26,
    borderWidth: 6,
    borderColor: '#dee500',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0060b4'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF'
  },
  selectDateButtonContainer: {
    alignItems: 'center'
  }
});

export const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
});

export const mapDispatchToProps = (dispatch) => ({
  saveSelectedDate: targetDate => dispatch(saveSelectedDate(targetDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
