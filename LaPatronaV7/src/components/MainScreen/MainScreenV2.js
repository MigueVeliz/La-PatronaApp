import React, { useEffect, useState } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    // Share,
    Linking,
    Dimensions,
} from 'react-native';

import Share from 'react-native-share';

import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
// import Video from 'react-native-video';

import { useDispatch, useSelector } from "react-redux";
import { hideMiniPlayer, showMiniPlayer } from '../../redux/actions/index';

export default MainScreenV2 = ({ navigation }) => {
    const showPlay = useSelector(state => state.showPlay);
    const word = useSelector(state => state.word);
    const dispatch = useDispatch();

    // State
    const [data, setData] = useState(0)

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
    }; // end of shareToFacebook

    dialCall = () => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${5518007012}';
        } else {
            phoneNumber = 'telprompt:${5518007012}';
        }

        // phoneNumber === 'android' ? phoneNumber = 'tel:${5518007012}' : phoneNumber = 'telprompt:${5518007012}';

        Linking.openURL(phoneNumber);
    };// end of dialCAll

    dialText = () => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'sms:5518007012?body=';
        } else {
            phoneNumber = 'sms:5518007012?';
        }

        Linking.openURL(phoneNumber);
    };//end of dialText


    loadData = async () => {
        const tempData = await fetch('https://lapatrona-app.herokuapp.com/mainscreen')
        const data = await tempData.json()

        setData(data[0])
        // dispatch(saveSongs(music))


    } // end of loadMusicData

    // I NEED TO MASTER THIS REACT HOOK!!!!!
    // I NEED TO MASTER THIS REACT HOOK!!!!!
    // I NEED TO MASTER THIS REACT HOOK!!!!!
    // I NEED TO MASTER THIS REACT HOOK!!!!!
    // I NEED TO MASTER THIS REACT HOOK!!!!!
    useEffect(() => {
        async function fetchData() {
            await loadData();

        } 
        SplashScreen.hide();


        const hidePlayButton = navigation.addListener('blur', () => {
            dispatch(hideMiniPlayer(false))
        });

        const showPlayButton = navigation.addListener('focus', () => {
            dispatch(showMiniPlayer(true))
        });

        // brings songs from api
        fetchData();

        return hidePlayButton;

    }, [navigation])

    shareToFacebookV2 = () => {
        const shareOptions = {
            title: 'Share via',
            message: 'some message',
            url: 'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/DjStylesAlbumimage.jpg',
            social: Share.Social.FACEBOOK,
            //whatsAppNumber: "9199999999",  // country code + phone number(currently only works on Android)
            filename: 'test', // only for base64 file in Android 
        };


        const optionsV2 = {
            url: 'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/DjStylesAlbumimage.jpg',
            message: 'Hello from La Patrona App',
            social: Share.Social.FACEBOOK,
            title: 'La Patrona App',
            subject: 'Sintonizanos',

        }

        Share.open(optionsV2)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); })

        // Share.shareSingle(shareOptions);
    }

    return (
        <View style={styles.container}>
            <View style={styles.promotionNumberViewStyle}><Text style={styles.promotionNumberTextStyle}>Para Publicidad: {data.promotionnumber}</Text></View>
            <View style={styles.topLogoView}>
                <Image
                    style={styles.topLogo}
                    // source={{ uri: 'https://filedn.com/lrjmguE73G2b4rRojAEKg3j/Images/mImUSICApng.png' }}
                    source={{ uri: data.mainimage }}
                />
            </View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: data.mainsponsorimage,
                            // 'https://filedn.com/lrjmguE73G2b4rRojAEKg3j/Images/LaPatronaApp/LaPatronaDesign.jpeg',
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

            <View style={styles.playerButtonContainer}>

            </View>

        </View>
    )
}


const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: '#16202f'
    },
    promotionNumberViewStyle: {
        // flex: 1

    },
    promotionNumberTextStyle: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: 'gray'
    },
    tempStyle: {
        color: 'red'
    },
    topLogoView: {
        flex: 1,
        // backgroundColor: 'gray',
        alignSelf: 'center'
    },
    topLogo: {
        width: 180,
        height: 70,
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        marginTop: 15
    },
    logoContainer: {
        flex: 4,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 45,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    logo: {
        // width: 350,
        width: width - 40,
        height: 250,
    },
    socialNetworksContainer: {
        flex: 2,
        width: width - 150,
        // backgroundColor: 'purple',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // flexWrap: 'wrap'
    },
    socialNetwork: {
        // marginRight: 20,
    },
    playerButtonContainer: {
        flex: 1,
        // backgroundColor: 'pink',

    },


});