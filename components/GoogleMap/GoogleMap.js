import React, { Component } from 'react';

import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// export default function LoginView() {
//   return (
//     <View style={styles.map}>
//     </View>
//   );
// }

export default class App extends Component<Props> {
  render() {
    return (
    <MapView
    style={{height: 350}}
    region={{
      latitude: 39.781511,
      longitude: -104.798673,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }}
    showsUserLocation={true}
    />
    );
  }}

const styles = StyleSheet.create({
  map: {

  }
});
