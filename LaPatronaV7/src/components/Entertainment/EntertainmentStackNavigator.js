import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Entertainment from './Entertainment';
import SingleEntertainment from './SingleEntertainment';

const Stack = createStackNavigator();

function EntertainmentStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entertainment" component={Entertainment} />
      <Stack.Screen name="SingleEntertainment" component={SingleEntertainment} />
    </Stack.Navigator>
  );
}

export default EntertainmentStackNavigator;