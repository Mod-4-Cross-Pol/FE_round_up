import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, Platform} from 'react-native';

export default function DatePicker() {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
