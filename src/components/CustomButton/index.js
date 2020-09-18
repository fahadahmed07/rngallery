import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomButton extends Component {
  static propTypes = {
    btnText: PropTypes.string.isRequired,
    btnPress: PropTypes.func.isRequired,
  };
  static defaultProps = {
    btnText: '',
    btnPress: undefined,
  };

  render() {
    const {btnText, btnPress} = this.props;

    return (
      <TouchableOpacity onPress={btnPress} style={{...styles.container}}>
        <Text style={{...styles.btnText}}>{btnText}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
