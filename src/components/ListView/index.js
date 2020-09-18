import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class ListView extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired,
    cardPress: PropTypes.func.isRequired,
  };
  static defaultProps = {
    imageUrl: '',
    cardText: '',
    cardPress: undefined,
  };

  render() {
    const {imageUrl, cardText, cardPress} = this.props;

    return (
      <TouchableOpacity onPress={cardPress} style={[styles.container]}>
        <Image source={{uri: imageUrl}} style={[styles.cardImage]} />
        <Text style={[styles.cardText]}>{cardText}</Text>
      </TouchableOpacity>
    );
  }
}

export default ListView;
