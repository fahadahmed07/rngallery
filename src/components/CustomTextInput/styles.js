import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    height: Metrics.ratio(40),
    width: Metrics.screenWidth * 0.9,
    borderColor: Colors.Oslo_Gray,
    borderWidth: Metrics.ratio(1),
    borderRadius: Metrics.ratio(8),
    alignSelf: 'center',
    paddingHorizontal: Metrics.ratio(16),
    marginBottom: Metrics.ratio(12),
  },
});
