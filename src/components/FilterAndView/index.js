import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

class FilterAndView extends Component {
  static propTypes = {
    leftTabIcon: PropTypes.string,
    leftTabText: PropTypes.string,
    leftTabPress: PropTypes.func,
    rightTabIcon: PropTypes.string,
    rightTabText: PropTypes.string,
    rightTabPress: PropTypes.func,
  };
  static defaultProps = {
    leftTabIcon: '',
    leftTabText: '',
    leftTabPress: undefined,
    rightTabIcon: '',
    rightTabText: '',
    rightTabPress: undefined,
  };

  render() {
    const {
      leftTabIcon,
      leftTabText,
      leftTabPress,
      rightTabIcon,
      rightTabText,
      rightTabPress,
    } = this.props;

    return (
      <View style={[styles.container]}>
        <View style={[styles.tabContainer]}>
          {leftTabIcon && leftTabText ? (
            <TouchableOpacity
              style={[styles.tabTouchable]}
              onPress={leftTabPress}>
              <Ionicons
                size={Metrics.ratio(20)}
                color={Colors.Oslo_Gray}
                name={leftTabIcon}
              />
              <Text style={[styles.tabText]}>{leftTabText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={[styles.tabContainer]}>
          {rightTabIcon && rightTabText ? (
            <TouchableOpacity
              style={[styles.tabTouchable]}
              onPress={rightTabPress}>
              <Ionicons
                size={Metrics.ratio(20)}
                color={Colors.Oslo_Gray}
                name={rightTabIcon}
              />
              <Text style={[styles.tabText]}>{rightTabText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

export default FilterAndView;
