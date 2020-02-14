import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


// Stack Navigators For Each Category
import MainScreen from '../components/MainScreen/MainScreen'
import MainScreenV2 from '../components/MainScreen/MainScreenV2'
import RestaurantsStackNavigator from '../components/Restaurants/RestaurantsStackNavigator';
import EntertainmentStackNavigator from '../components/Entertainment/EntertainmentStackNavigator';
import NightClubsStackNavigator from '../components/NightClubs/NightClubsStackNavigator';
import ServicesStackNavigator from '../components/Services/ServicesStackNavigator';
import GalleryStackNavigator from '../components/Gallery/GalleryStackNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home';
                        } else if (route.name === 'Restaurantes') {
                            iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
                        } else if (route.name === 'Entretenimiento') {
                            iconName = focused ? 'ios-videocam' : 'ios-videocam';
                        } else if (route.name === 'NightClubs') {
                            iconName = focused ? 'ios-business' : 'ios-business';
                        } else if (route.name === 'Services') {
                            iconName = focused ? 'logo-buffer' : 'logo-buffer';
                        } else if (route.name === 'Gallery') {
                            iconName = focused ? 'ios-images' : 'ios-images';
                        }
                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={MainScreenV2} />
                <Tab.Screen name="Restaurantes" component={RestaurantsStackNavigator} />
                <Tab.Screen name="Entretenimiento" component={EntertainmentStackNavigator} />
                <Tab.Screen name="NightClubs" component={NightClubsStackNavigator} />
                <Tab.Screen name="Services" component={ServicesStackNavigator} />
                <Tab.Screen name="Gallery" component={GalleryStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}