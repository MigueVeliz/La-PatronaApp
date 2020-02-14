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

class SingleGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://lapatrona-app.herokuapp.com/gallery',
            gallery: []
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
        const gallery = this.props.route.params
        return (
            <ScrollView style={styles.container}>
                

                    <View style={styles.contentDataView}>
                        <View style={styles.infoView}>
                            <Text style={styles.businessNameTextStyle}>{gallery.title}</Text>
                        </View>


                        <View style={styles.specialImageView}>
                            <Image source={{ uri: gallery.extrafield2 }} style={styles.specialImage} />
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

export default SingleGallery;