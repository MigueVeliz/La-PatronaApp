import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Services from './Services';
import SingleService from './SingleService';

const Stack = createStackNavigator();

function ServicesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="SingleService" component={SingleService} />
    </Stack.Navigator>
  );
}

export default ServicesStackNavigator;