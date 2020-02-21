import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './Gallery';
import SingleGallery from './SingleGallery';

import GalleryV2 from './GalleryV2';

const Stack = createStackNavigator();

function GalleryStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="SingleGallery" component={SingleGallery} />

      <Stack.Screen name="Images"  component={GalleryV2} />
    </Stack.Navigator>
  );
}

export default GalleryStackNavigator;