import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default function Map({ navigation, events }) {
    return (
      <MapView
      showsUserLocation={true}
      style={styles.map}
      region={{
        latitude: 39.7306645,
        longitude: -104.988245,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
      >
      {events.map(event => {
        
        let eventLat = event.lat_long.split(',')[0];
        let eventLong = event.lat_long.split(',')[1];
        
        return <MapView.Marker
        coordinate=
        {{latitude: eventLat,
          longitude: eventLong}}
          title={event.activity}
          description={event.notes}
        onPress={() => {navigation.navigate('FullEventCard', {event: event})}}
        />
      })}
      </MapView>
    );
  }

const styles = StyleSheet.create({
  map: {
    height: 350,
    width: 'auto',
    borderWidth: 5,
    borderColor: '#0060b4'
  }
});
