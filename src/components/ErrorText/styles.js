import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  mainText: {
    marginHorizontal: Metrics.ratio(20),
    fontSize: Metrics.ratio(14),
    color: Colors.Punch,
  },
  errorHead: {
    fontWeight: 'bold',
  },
});
