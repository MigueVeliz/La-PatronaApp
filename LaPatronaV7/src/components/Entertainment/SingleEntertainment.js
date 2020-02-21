import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Linking,
    Platform,
} from 'react-native';

import { Card, ListItem, Button, } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

class SingleEntertainment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://lapatrona-app.herokuapp.com/entertainment',
            entertainment: []
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

    render() {
        const entertainment = this.props.route.params
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewContainerStyle}>
                    <Carousel
                        
                        // layout={'tinder'}
                        layout={'stack'}
                        // layoutCardOffset={`18`}
                        ref={(c) => { this._carousel = c; }}
                        data={entertainment.images}
                        renderItem={this.renderItem}
                        sliderWidth={width}
                        itemWidth={itemWidth}
                    />

                    <View style={styles.contentDataView}>
                        <View style={styles.infoView}>
                            <Text style={styles.businessNameTextStyle}>{entertainment.business_name}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-document"
                                size={iconSize}
                                color="blue"
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.bioTextStyle}>{entertainment.bio}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-navigate"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL(entertainment.business_address)
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>{entertainment.business_address}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-call"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL(Platform.OS === 'android' ? Platform.OS = `tel:${entertainment.phonenumber}` : Platform.OS = `telprompt:${entertainment.phonenumber}`)
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Numero: {entertainment.phonenumber}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-time"
                                size={iconSize}
                                color="blue"
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Lunes - Jueves: {entertainment.daybusinesshours === '' ? "N/A" : entertainment.daybusinesshours}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-time"
                                size={iconSize}
                                color="blue"
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>Viernes - Domingo: {entertainment.nightbusinesshours === '' ? "N/A": entertainment.nightbusinesshours}</Text>

                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="ios-globe"
                                size={iconSize}
                                color="green"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL(entertainment.website)
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>{entertainment.website}</Text>
                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="logo-facebook"
                                size={iconSize}
                                color="blue"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.facebook.com/' + entertainment.facebook)
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>FB: {entertainment.facebook}</Text>

                        </View>

                        <View style={styles.infoView}>
                            <Icon
                                name="logo-instagram"
                                size={iconSize}
                                color="purple"
                                // onPress={this.shareToFacebook}
                                onPress={() =>
                                    Linking.openURL('https://www.instagram.com/' + entertainment.instagram)
                                }
                                style={styles.socialNetwork}
                            />
                            <Text style={styles.otherInfoTextStyle}>IG: {entertainment.instagram}</Text>
                        </View>

                        <View style={styles.specialImageView}>
                            <Image source={{ uri: entertainment.specialimage }} style={styles.specialImage} />
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
        fontSize: 15
    },
    otherInfoTextStyle: {
        fontSize: 16
    },
    specialImageView: {
        // backgroundColor: 'red',

        width: itemWidth - 40,
        height: 130,
        alignSelf: 'center',
        marginBottom: 30,
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
    }

});

export default SingleEntertainment;