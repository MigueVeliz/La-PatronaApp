import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

// Redux Goodies
import { connect } from 'react-redux';
import { hideMiniPlayer, showMiniPlayer } from '../../redux/actions/index';

class MiniPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPlay: true,
            paused: true,
            streamUrl: 'https://stream.radiojar.com/t48bnn1z4mzuv.mp3'

        };
    } // end of constructor

    componentDidMount() {
    } // end of componentDidMount

    playStream = () => {
        this.setState({ paused: false, showPlay: false });
    };

    pauseStream = () => {
        this.setState({ paused: true, showPlay: true });
    };


    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.playButtonContainerStyle}>
                    {/* <View style={styles.player}>
                        {this.state.showPlay ? (
                            <Icon
                                name="ios-play"
                                size={40}
                                color="red"
                                onPress={this.playStream}
                            />
                        ) : (
                                <Icon
                                    name="ios-pause"
                                    size={40}
                                    color="red"
                                    onPress={this.pauseStream}
                                />
                            )}
                    </View> */}
                    {
                        this.props.showMiniPlayer ?
                            <View style={styles.player}>
                                {this.state.showPlay ? (
                                    <Icon
                                        name="ios-play"
                                        size={40}
                                        color="red"
                                        onPress={this.playStream}
                                    />
                                ) : (
                                        <Icon
                                            name="ios-pause"
                                            size={40}
                                            color="red"
                                            onPress={this.pauseStream}
                                        />
                                    )}
                            </View>
                            : null
                        
                    }

                    <View>
                        <Video
                            source={{ uri: this.state.streamUrl }} // Can be a URL or a local file.
                            ref={ref => {
                                this.player = ref;
                            }} // Store reference
                            paused={this.state.paused}
                            playInBackground={true}
                            playWhenInactive={true}
                            ignoreSilentSwitch="ignore"
                            onBuffer={this.onBuffer} // Callback when remote video is buffering
                            onError={this.videoError} // Callback when video cannot be loaded
                            style={styles.backgroundVideo}
                        />
                    </View>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },
    playButtonContainerStyle: {
        // backgroundColor: 'gray'
    },
    player: {
        flex: 3,
        borderColor: 'black',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});

const mapStateToProps = state => ({
    showPlay: state.showPlay,
    showMiniPlayer: state.showMiniPlayer
})

const mapDispatchToProps = dispatch => {
    return {
        onShowMiniPlayer: miniPlayer => {
            dispatch(showMiniPlayer(miniPlayer));
        },
        onHideMiniPlayer: miniPlayer => {
            dispatch(hideMiniPlayer(miniPlayer));
        }
    }

}// end of mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);