import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  floatingActionBtn: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    backgroundColor: Colors.Apple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(25),
    position: 'absolute',
    bottom: Metrics.ratio(30),
    right: Metrics.ratio(30),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
