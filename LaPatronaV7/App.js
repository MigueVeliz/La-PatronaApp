import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native';

import TabNavigator from './src/navigation/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
// import SafeAreaView from 'react-native-safe-area-view';

import MiniPlayer from './src/components/MiniPlayer/MiniPlayer';


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
                <View style={styles.miniPlayerContainerView}>
                    <MiniPlayer />
                </View>
            </SafeAreaView>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },
    miniPlayerContainerView: {
        // height: 65,
        width: width,
        position: 'absolute',
        marginTop: height - 165
    },

});

export default App;