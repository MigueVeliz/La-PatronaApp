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


class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: true,
            // url: 'https://lapatrona-app.herokuapp.com/services',
            url: 'https://la-patrona-app-ny.herokuapp.com/services',
            services: [],
            loaded: false
        };
    } // end of constructor

    async componentDidMount() {
        const data = await fetch(this.state.url);
        const dataJson = await data.json();

        this.setState({ services: dataJson, loaded: true, spinner: !this.state.spinner })

    } // end of componentDidMount

    renderServices = () => {
        return this.state.services.map((item, index) => {
            return (
                <View key={index}>
                    <Card
                        // title={restaurant.business_name}
                        image={{ url: item.mainimage }}>
                        <Text style={styles.titleStyle}>
                            {item.business_name.toUpperCase()}
                        </Text>
                        <Text style={ styles.subtitleStyle }>
                            {item.business_address}
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#F4362A' }}
                            title='VER'
                            raised
                            onPress={() => this.props.navigation.push('SingleService', item)}
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
                    {this.renderServices()}
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

export default Services;