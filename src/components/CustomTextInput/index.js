import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomTextInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
    value: '',
    placeholderText: '',
    onChange: undefined,
  };

  render() {
    const {value, placeholderText, onChange} = this.props;

    return (
      <TextInput
        style={{...styles.container}}
        onChangeText={onChange}
        placeholder={placeholderText}
        value={value}
      />
    );
  }
}

export default CustomTextInput;
