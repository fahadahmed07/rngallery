import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Colors, Metrics} from '../../theme';

class ImagePreviewModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onBackdropPress: PropTypes.func.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };
  static defaultProps = {
    isVisible: false,
    onBackdropPress: undefined,
    imageUrl: '',
  };

  render() {
    const {isVisible, onBackdropPress, imageUrl} = this.props;
    return (
      <Modal
        style={{...styles.container}}
        hasBackdrop={true}
        backdropColor={Colors.Black}
        backdropOpacity={1}
        onBackdropPress={onBackdropPress}
        avoidKeyboard={true}
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={400}
        animationOutTiming={400}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}>
        <View style={{...styles.contentContainer}}>
          <TouchableOpacity
            onPress={onBackdropPress}
            style={{...styles.cancelBtn}}>
            <Ionicons
              name={'close'}
              size={Metrics.ratio(25)}
              color={Colors.White}
            />
          </TouchableOpacity>
          <ImageZoom
            cropWidth={Metrics.screenWidth}
            cropHeight={Metrics.screenHeight}
            imageWidth={Metrics.screenWidth}
            imageHeight={Metrics.screenHeight}
            minScale={1}>
            <Image style={{...styles.modalImage}} source={{uri: imageUrl}} />
          </ImageZoom>
        </View>
      </Modal>
    );
  }
}

export default ImagePreviewModal;
