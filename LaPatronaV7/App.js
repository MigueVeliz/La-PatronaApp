import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native';

//Redux Goodies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import miniPlayerReducer from './src/redux/reducers/miniPlayerReducer';


import TabNavigator from './src/navigation/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
// import SafeAreaView from 'react-native-safe-area-view';

import MiniPlayer from './src/components/MiniPlayer/MiniPlayer';

// const reducer = combineReducers({miniPlayerReducer})
const reducer = miniPlayerReducer;
const store = createStore(reducer)

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
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                    <TabNavigator />
                    <View style={styles.miniPlayerContainerView}>
                        <MiniPlayer />
                    </View>
                </SafeAreaView>
            </Provider>
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