import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from './Restaurants';
import SingleRestaurant from './SingleRestaurant';

const Stack = createStackNavigator();

function RestaurantsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="SingleRestaurant" options={{ title: '' }}component={SingleRestaurant} />
    </Stack.Navigator>
  );
}

export default RestaurantsStackNavigator;