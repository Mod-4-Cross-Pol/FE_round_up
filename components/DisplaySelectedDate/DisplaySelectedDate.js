import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

export function DisplaySelectedDate(props) {
  return (
    <View>
      <Text>{props.selectedDate}</Text>
    </View>
  )
}

export const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
});

export default connect(mapStateToProps)(DisplaySelectedDate);
