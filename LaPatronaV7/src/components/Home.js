import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } // end of constructor

    componentDidMount() {

    } // end of componentDidMount

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Home Page!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },

});

export default Home;