import React, { Component } from 'react';

import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Map() {

    return (
    <MapView
    showsUserLocation={true}
    style={{height: 350}}
    region={{
      latitude: 39.781511,
      longitude: -104.798673,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }}
    >
    <MapView.Marker
      coordinate={{latitude: 39.777,
      longitude: -104.777}}
      title={"Marker title"}
      description={"Marker description"}
    />
    </MapView>
    );
  }

const styles = StyleSheet.create({
  map: {

  }
});
