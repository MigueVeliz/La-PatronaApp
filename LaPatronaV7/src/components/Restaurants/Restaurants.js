import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'


class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://la-patrona-app.herokuapp.com/restaurants',
            restaurants: [],
            loaded: false
        };
    } // end of constructor

    async componentDidMount() {
        const restaurantsData = await fetch(this.state.url);
        const restaurants = await restaurantsData.json();

        this.setState({ restaurants: restaurants, loaded: true })

    } // end of componentDidMount

    renderRestaurants = () => {
        return this.state.restaurants.map((restaurant, index) => {
            return (
                <View key={index}>
                    <Card
                        title={restaurant.business_name}
                        image={{ url: restaurant.mainimage }}>

                        <Button
                            // icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VER'
                            onPress={() => this.props.navigation.push('SingleRestaurant', restaurant )}
                        />
                    </Card>
                </View>
            )
        })
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicatorView} /> */}

                <View>
                    {this.renderRestaurants()}
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
    activityIndicatorView: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Restaurants;