import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';



class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: true,
            // url: 'https://lapatrona-app.herokuapp.com/restaurants',
            url: 'https://la-patrona-app-ny.herokuapp.com/restaurants',
            restaurants: [],
            loaded: false
        };
    } // end of constructor

    async componentDidMount() {
        const restaurantsData = await fetch(this.state.url);
        const restaurants = await restaurantsData.json();

        this.setState({ restaurants: restaurants, loaded: true, spinner: !this.state.spinner })

    } // end of componentDidMount

    renderRestaurants = () => {
        return this.state.restaurants.map((restaurant, index) => {
            return (
                <View key={index}>

                    <Card
                        // title={restaurant.business_name}
                        image={{ url: restaurant.mainimage }}>
                        <Text style={styles.titleStyle}>
                            {restaurant.business_name.toUpperCase()}
                        </Text>
                        <Text style={styles.subtitleStyle}>
                            {restaurant.business_address}
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#F4362A' }}
                            title='VER'
                            raised
                            onPress={() => this.props.navigation.push('SingleRestaurant', restaurant)}
                        // type="outline"
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
                <Spinner
                    visible={this.state.spinner}
                    textContent={'LOADING...'}
                    textStyle={styles.spinnerTextStyle}
                />
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
    },
    titleStyle: {
        fontSize: 18,
        marginBottom: 2,
        fontFamily: 'Avenir-Medium'
    },
    subtitleStyle: {
        fontSize: 14,
        marginBottom: 15,
        // fontFamily: 'Avenir-Medium'
    }

});

export default Restaurants;