import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function ShortEventCard(props) {
  return (
    <View key={Math.random()} style={styles.smallCardContainer}>
      <Text style={styles.titleText}>{props.activity}</Text>
      <Text style={styles.text}>{props.location}</Text>
      <Text style={styles.text}>Time: {props.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    height: 100,
    width: 'auto',
    marginBottom: 20,
    backgroundColor: '#28BFBD',
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#3b4aff'
  },
  titleText: {
    fontFamily: 'Farah',
    fontSize: 30,
    color: '#000',
    marginTop: 7
  },
  text: {
    fontSize: 20,
    color: '#000'
  }
});
