import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Linking,
} from 'react-native';

import { Card, ListItem, Button, } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';




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

    renderItem = ({ item, index }) => {
        const { height, width } = Dimensions.get('window');
        return (
            <View style={styles.slide} key={index}>
                <Image source={{ uri: item }} style={styles.singleImageDimensions} />
            </View>
        );
    }

    renderData = () => {
        const restaurant = this.props.route.params


    }

    render() {
        const restaurant = this.props.route.params
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewContainerStyle}>
                    <Carousel
                        layout={'tinder'}
                        // layoutCardOffset={`18`}
                        ref={(c) => { this._carousel = c; }}
                        data={restaurant.images}
                        renderItem={this.renderItem}
                        sliderWidth={width}
                        itemWidth={itemWidth}
                    />

                    <View style={styles.contentDataView}>
                        <View style={styles.infoView}>
                            <Text style={styles.businessNameTextStyle}>{restaurant.business_name}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-document"
                                size={iconSize}
                                color="blue"
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.bioTextStyle}>{restaurant.bio}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-navigate"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>{restaurant.business_address}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-call"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Numero: {restaurant.phonenumber}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-time"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Lunes - Jueves: {restaurant.daybusinesshours}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-time"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Viernes - Domingo: {restaurant.nightbusinesshours}</Text>

                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-globe"
                                size={iconSize}
                                color="green"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>{restaurant.website}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="logo-facebook"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>FB: {restaurant.facebook}</Text>

                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="logo-instagram"
                                size={iconSize}
                                color="purple"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/la.patrona.96995')
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>IG: {restaurant.instagram}</Text>
                        </View>



                        <View style={styles.specialImageView}>
                            <Image source={{ uri: restaurant.specialimage }} style={styles.specialImage} />
                        </View>


                    </View>
                </View>
            </ScrollView >
        );
    }
}

const { height, width } = Dimensions.get('window');
const itemWidth = width - 40;
const iconSize = 25;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },
    viewContainerStyle: {
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    singleImageDimensions: {
        width: itemWidth,
        height: 200,
        marginTop: 25,
    },
    contentDataView: {
        width: width - 20,
        // justifyContent: 'center',
        alignSelf: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
        marginTop: 30,
        padding: 10,
    },
    infoView: {
        flexDirection: 'row',
        // backgroundColor: 'gray',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    socialNetwork: {
        marginRight: 8,
    },
    businessNameTextStyle: {
        fontSize: 30,
        fontFamily: 'Avenir-Medium',
    },
    bioTextStyle: {
        fontSize: 14
    },
    otherInfoTextStyle: {
        fontSize: 16
    },
    specialImageView: {
        // backgroundColor: 'red',

        width: itemWidth - 40,
        height: 130,
        alignSelf: 'center',
        marginTop: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    specialImage: {
        width: itemWidth - 40,
        height: 130,
        alignSelf: 'center',
        // marginTop: 30,


    }

});

export default SingleRestaurant;