import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Metrics, Colors} from '../../theme';

class FloatingActionButton extends Component {
  static propTypes = {
    actionBtnPress: PropTypes.func.isRequired,
  };
  static defaultProps = {
    actionBtnPress: undefined,
  };

  render() {
    const {actionBtnPress} = this.props;

    return (
      <TouchableOpacity
        onPress={actionBtnPress}
        style={{...styles.floatingActionBtn}}>
        <Ionicons
          name={'add-outline'}
          size={Metrics.ratio(25)}
          color={Colors.White}
        />
      </TouchableOpacity>
    );
  }
}

export default FloatingActionButton;
