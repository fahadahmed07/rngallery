import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Colors, Metrics} from '../../theme';

class ChooseImageCard extends Component {
  static propTypes = {
    cardText: PropTypes.string.isRequired,
    chooseImagePress: PropTypes.func.isRequired,
  };
  static defaultProps = {
    cardText: '',
    chooseImagePress: undefined,
  };

  render() {
    const {cardText, chooseImagePress} = this.props;

    return (
      <View style={{...styles.container}}>
        <TouchableOpacity
          onPress={chooseImagePress}
          style={{...styles.chooseImageContainer}}>
          <Ionicons
            name={'images'}
            size={Metrics.ratio(45)}
            color={Colors.Oslo_Gray}
          />
          <Text style={{...styles.cardText}}>{cardText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChooseImageCard;
