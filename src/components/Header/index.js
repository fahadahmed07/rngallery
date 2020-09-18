import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

class Header extends Component {
  static propTypes = {
    headerText: PropTypes.string,
    headerTextStyle: PropTypes.object,
    leftIcon: PropTypes.string,
    leftIconStyle: PropTypes.object,
    leftBtnPress: PropTypes.func,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    rightBtnPress: PropTypes.func,
  };
  static defaultProps = {
    headerText: '',
    headerTextStyle: undefined,
    leftIcon: undefined,
    leftIconStyle: undefined,
    leftBtnPress: undefined,
    rightIcon: undefined,
    rightIconStyle: undefined,
    rightBtnPress: undefined,
  };

  render() {
    const {
      headerText,
      headerTextStyle,
      leftIcon,
      leftIconStyle,
      leftBtnPress,
      rightIcon,
      rightIconStyle,
      rightBtnPress,
    } = this.props;

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.TouchableMenu, leftIconStyle]}
          onPress={leftBtnPress}>
          <Ionicons
            size={Metrics.ratio(25)}
            color={Colors.Oslo_Gray}
            name={leftIcon}
          />
        </TouchableOpacity>

        {headerText ? (
          <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>
        ) : (
          <Text style={[styles.headerText]}>
            <Text style={{color: Colors.Cod_Gray}}>Rn</Text>
            <Text style={{color: Colors.Apple}}>gallery</Text>
          </Text>
        )}

        <TouchableOpacity
          onPress={rightBtnPress}
          style={[styles.TouchableMenu, rightIconStyle]}>
          <Ionicons
            size={Metrics.ratio(25)}
            color={Colors.Oslo_Gray}
            name={rightIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
