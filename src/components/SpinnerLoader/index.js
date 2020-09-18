import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import {Colors} from '../../theme';

export default class SpinnerLoader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  render() {
    const {isLoading} = this.props;
    return (
      <Spinner
        visible={isLoading}
        color={Colors.Black}
        size="normal"
        customIndicator={
          <ActivityIndicator size="large" color={Colors.Apple} />
        }
      />
    );
  }
}
