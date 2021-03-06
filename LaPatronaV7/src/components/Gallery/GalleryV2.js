// Gallery.js
import React, { Component } from 'react';
import { Dimensions, View, Linking } from 'react-native';
import ImageViewer from '@dwqs/react-native-image-viewer';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';

import { Card, ListItem, Icon } from 'react-native-elements'

export default class Gallery extends Component {

  constructor(props) {
    super(props);

    this.openLightbox = (index) => {
      this.setState({
        index,
        shown: true,
      });
    };

    this.hideLightbox = () => {
      this.setState({
        index: 0,
        shown: false,
      });
    };
  }

  state = {
    index: 0,
    shown: false,
    images: [
      'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/logo.jpg',
      'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/logo.jpg',
      'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/logo.jpg',
      'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/logo.jpg',
      'https://mi-musica-app.s3.amazonaws.com/images/LaPatronaApp/logo.jpg'
    ]
  };

  render() {
    const gallery = this.props.route.params
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {(() =>
          gallery.images.map((image, idx) =>
            <GalleryImage
              index={idx}
              key={idx}
              onPress={this.openLightbox}
              uri={image}
            />
          ))()}

        <ImageViewer
          shown={this.state.shown}
          imageUrls={gallery.images}
          onClose={this.hideLightbox}
          index={this.state.index}
        
        />

        {/* <Icon
          name="logo-instagram"
          size={40}
          color="purple"
          // onPress={this.shareToFacebook}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/la_patrona_radio')
          }
        // style={styles.socialNetwork}
        /> */}

      </View>
    );
  }


}

Gallery.propTypes = {
  images: PropTypes.array,
};