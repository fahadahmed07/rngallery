import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class ErrorText extends Component {
  static propTypes = {
    errorText: PropTypes.string.isRequired,
  };
  static defaultProps = {
    errorText: '',
  };

  render() {
    const {errorText} = this.props;

    return (
      <Text style={{...styles.mainText}}>
        <Text style={{...styles.errorHead}}>ERROR : </Text>
        <Text>{errorText}</Text>
      </Text>
    );
  }
}

export default ErrorText;
