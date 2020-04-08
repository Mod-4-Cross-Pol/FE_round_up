import * as React from 'react';
import Map from '../../components/Map/Map';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import ShortEventCardContainer from '../../components/ShortEventCardContainer/ShortEventCardContainer';
import { StyleSheet, View } from 'react-native';

export default function Dashboard() {
  return (
    <View>
      <HeaderNav />
      <Map />
      <ShortEventCardContainer />
    </View>
  );
}
