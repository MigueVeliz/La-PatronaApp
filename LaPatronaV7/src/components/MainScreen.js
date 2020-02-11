/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Share,
  Linking,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import CountDown from 'react-native-countdown-component';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCounter: true,
      color: '#008f68',
      timeTillOpening: 0,
      showPause: false,
      showPlay: true,
      track: {
        id: '1', // Must be a string, required
        url: 'http://stream.radiojar.com/t48bnn1z4mzuv.mp3',
        url2:
          'https://mi-musica-app.s3.amazonaws.com/songs/NewDashboard/Sonido Fania 97/ESTRENO MUY ROMANTICO 2020 (( POR TI VOLVERE )) COLONIA JORGE MURAD SONIDO FANIA 97 - 13 DICIEMBRE.mp3', // Load media from the network
        title: 'Avaritia',
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339

        artwork:
          'https://mi-musica-app.s3.amazonaws.com/images/SongsImages/SonidoFania97SongImage.jpg', // Load artwork from the network
      },
      paused: true,
    };
  } // end of constructor

  componentDidMount() {
    SplashScreen.hide();

    const start = new Date();
    const end = new Date(2020, 1, 3);
    const timeInterval = '2020-02-08T05:00:00+00:00'; //Viernes Feb 7 11:59pm
    const range = moment.range(start, timeInterval);

    this.setState({timeTillOpening: range.valueOf() / 1000});
  } // end of componentDidMount

  playStream = () => {
    this.setState({paused: false, showPlay: false});
  };

  resumePlaying = () => {};

  pauseStream = () => {
    this.setState({paused: true, showPlay: true});
  };

  shareToFacebook = () => {
    Share.share(
      {
        message: 'Escucha transmiciones en vivo en La Patraona App.',
        url: 'wwww.lapatronausa.com',
        title: 'Radio La Patrona Usa',
      },
      {
        // Android only:
        dialogTitle: 'Radio La Patrona Usa',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
    );
  };

  dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${5518007012}';
    } else {
      phoneNumber = 'telprompt:${5518007012}';
    }

    // phoneNumber === 'android' ? phoneNumber = 'tel:${5518007012}' : phoneNumber = 'telprompt:${5518007012}';

    Linking.openURL(phoneNumber);
  };

  dialText = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'sms:5518007012?body=';
    } else {
      phoneNumber = 'sms:5518007012?body=';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://filedn.com/lrjmguE73G2b4rRojAEKg3j/Images/LaPatronaApp/LaPatronaDesign.jpeg',
            }}
          />
        </View>
        <View style={styles.socialNetworksContainer}>
          <Icon
            name="logo-facebook"
            size={40}
            color="blue"
            // onPress={this.shareToFacebook}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/la.patrona.96995')
            }
            style={styles.socialNetwork}
          />
          <Icon
            name="logo-instagram"
            size={40}
            color="purple"
            // onPress={this.shareToFacebook}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/la_patrona_radio')
            }
            style={styles.socialNetwork}
          />
          <Icon
            name="logo-whatsapp"
            size={40}
            color="green"
            // onPress={this.shareToFacebook}
            onPress={this.dialCall}
            style={styles.socialNetwork}
          />
          <Icon
            name="md-list-box"
            size={40}
            color="indigo"
            // onPress={this.shareToFacebook}
            onPress={this.dialText}
            style={styles.socialNetwork}
          />
        </View>
        {/* {!this.state.hideCounter ? (
          <View style={styles.countDownContainer}>
            <Text style={styles.countDownTitle}>
              EMPEZAMOS A TRANSMITIR EN:
            </Text>
            <View style={styles.countDownTimer}>
              <CountDown
                // until={10}
                until={this.state.timeTillOpening}
                onFinish={() => this.setState({hideCounter: true})}
                onPress={() => alert('Muy Pronto')}
                size={22}
              />
            </View>
          </View>
        ) : null} */}

        {this.state.hideCounter ? (
          <View>
            <Text style={styles.comingSoonText}>
              Aplicacion Completa Muy Pronto!
            </Text>
          </View>
        ) : null}

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

        <View>
          <Video
            source={{uri: this.state.track.url}} // Can be a URL or a local file.
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#16202f'
  },
  titleContainer: {
    flex: 3,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: 'blue',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1c2a3c',
    marginTop: 20,
  },
  logoContainer: {
    flex: 7,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  logo: {
    width: 350,
    height: 300,
  },
  countDownContainer: {
    flex: 2,
    // backgroundColor: "lightgray",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  countDownTimer: {
    // backgroundColor: 'red',
    marginTop: 15,
  },
  countDownTitle: {
    fontSize: 20,
    // marginTop: 15,
    color: 'black',
    // marginTop: 15
  },
  innerCountDownComponent: {
    // backgroundColor: 'pink',
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleComponent: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  innerTextNumber: {
    fontSize: 30,
  },
  innerTextWord: {
    fontSize: 15,
  },
  socialNetworksContainer: {
    flex: 2,
    // width: 100,
    // backgroundColor: 'purple',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // flexWrap: 'wrap'
  },
  socialNetwork: {
    marginRight: 20,
  },
  comingSoonText: {
    alignSelf: 'center',
    fontSize: 20,
  },
  player: {
    flex: 3,
    // backgroundColor: 'red',
    // borderRadius: 1,
    // borderWidth: 0.8,
    borderColor: 'black',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
