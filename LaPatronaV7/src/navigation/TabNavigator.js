import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../components/Home'
import MainScreen from '../components/MainScreen'
import Restaurants from '../components/Restaurants'
import Filmaciones from '../components/Filmaciones'

// Stack Navigators For Each Category
import RestaurantsStackNavigator from '../components/Restaurants/RestaurantsStackNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'MainScreen') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home';
                        } else if (route.name === 'Restaurants') {
                            iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
                        } else if (route.name === 'Filmaciones') {
                            iconName = focused ? 'ios-videocam' : 'ios-videocam';
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
                <Tab.Screen name="MainScreen" component={MainScreen} />
                <Tab.Screen name="Restaurants" component={RestaurantsStackNavigator} />
                <Tab.Screen name="Filmaciones" component={Filmaciones} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}