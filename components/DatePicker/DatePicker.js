import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, Platform, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { saveSelectedDate } from '../../actions/actions';

export function DatePicker(props) {

  const [ date, setDate ] = useState(Date.now());
  const [ mode, setMode ] = useState('date');
  const [ show, setShow ] = useState(false);

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let displayDate = selectedDate.toString()
    displayDate = displayDate.split(' ').splice(0,4).join(' ')
    await props.saveSelectedDate(displayDate)
  };

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
    height: 500
  }
});

export const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
});

export const mapDispatchToProps = (dispatch) => ({
  saveSelectedDate: targetDate => dispatch(saveSelectedDate(targetDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
