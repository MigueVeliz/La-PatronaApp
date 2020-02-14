import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import NightClubs from './NightClubs';
import SingleNightClub from './SingleNightClub';

const Stack = createStackNavigator();

function NightClubsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NightClubs" component={NightClubs} />
      <Stack.Screen name="SingleNightClub" component={SingleNightClub} />
    </Stack.Navigator>
  );
}

export default NightClubsStackNavigator;