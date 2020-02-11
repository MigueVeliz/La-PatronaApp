import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'


class SingleRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://la-patrona-app.herokuapp.com/restaurants',
            restaurants: []
        };
    } // end of constructor

    componentDidMount() {

    } // end of componentDidMount

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.centerTxt}>Single Restaurant Pae!</Text>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },

});

export default SingleRestaurant;