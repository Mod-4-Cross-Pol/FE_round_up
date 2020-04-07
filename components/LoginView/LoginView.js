import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GAME</Text>
      <Text style={styles.title}>ON!</Text>
      <View style={styles.viewInput}><TextInput style={styles.input} placeholder='username...'/></View>
      <View style={styles.viewInput}><TextInput style={styles.input} placeholder='password...' /></View>
      <View style={styles.signInButton}><Button title='sign in'/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28BFBD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20
  },
  viewInput: {
    marginTop: 20
  },
  signInButton: {
    marginTop: 20,
    width: 200
  },

});
