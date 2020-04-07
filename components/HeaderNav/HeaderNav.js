import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HeaderNav() {
  return (
    <View style={styles.nav}>
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}><Button title='change date'/></View>
        <View style={styles.navButton}><Button title='create activity'/></View>
        <View style={styles.navButton}><Button title='log out'/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 300,
    backgroundColor: '#9cffad'
  },
  navText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 70
  },
  navButtonContainer: {
    marginTop: 180
  },
  navButton: {

  }
});
