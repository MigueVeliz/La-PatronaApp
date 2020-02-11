import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';

import TabNavigator from './src/navigation/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
// import SafeAreaView from 'react-native-safe-area-view';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    } // end of constructor

    componentDidMount() {
        SplashScreen.hide();

    } // end of componentDidMount


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TabNavigator />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },
    textStyle: {
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 30,
    }

});

export default App;