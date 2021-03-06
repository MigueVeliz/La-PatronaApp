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


class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: true,
            // url: 'https://lapatrona-app.herokuapp.com/gallery',
            url: 'https://la-patrona-app-ny.herokuapp.com/gallery',
            gallery: [],
            loaded: false
        };
    } // end of constructor

    async componentDidMount() {
        const data = await fetch(this.state.url);
        const dataJson = await data.json();

        this.setState({ gallery: dataJson, loaded: true, spinner: !this.state.spinner })

    } // end of componentDidMount

    renderGallery = () => {
        return this.state.gallery.map((item, index) => {
            return (
                <View key={index}>
                    <Card
                        // title={restaurant.business_name}
                        image={{ uri: item.extrafield2 }}>
                        <Text style={styles.titleStyle}>
                            {item.title.toUpperCase()}
                        </Text>
                        <Text style={ styles.subtitleStyle }>
                            {item.datee}
                        </Text>
                        <Text style={ styles.fotosTextStyle }>
                            Fotos: {item.images.length}
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#F4362A' }}
                            title='VER'
                            raised
                            onPress={() => this.props.navigation.push('Images', item)}
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
                <View style={styles.cardContainerStyle}>
                    {this.renderGallery()}
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
    cardContainerStyle: {
        marginBottom: 20,
    },
    titleStyle: {
        fontSize: 18, 
        marginBottom: 2,
        fontFamily: 'Avenir-Medium'
    },
    subtitleStyle: {
        fontSize: 14, 
        marginBottom: 1,
        // fontFamily: 'Avenir-Medium'
    },
    fotosTextStyle: {
        color: "#38405F",
        // color: "gray",
        fontSize: 12,
        marginBottom: 10
    }

});

export default Gallery;