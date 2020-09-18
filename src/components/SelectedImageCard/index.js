import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class SelectedImageCard extends Component {
  static propTypes = {
    imageUri: PropTypes.object.isRequired,
    selectedImagePress: PropTypes.func.isRequired,
  };
  static defaultProps = {
    imageUri: '',
    selectedImagePress: undefined,
  };

  render() {
    const {imageUri, selectedImagePress} = this.props;

    return (
      <View style={{...styles.container}}>
        <TouchableOpacity
          onPress={selectedImagePress}
          style={{...styles.selectedImageContainer}}>
          <Image source={imageUri} style={{...styles.image}} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SelectedImageCard;
