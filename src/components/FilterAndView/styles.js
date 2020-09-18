import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Aqua_Haze,
    flexDirection: 'row',
  },
  tabContainer: {
    width: Metrics.screenWidth * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.ratio(12),
  },
  tabText: {
    fontSize: Metrics.ratio(16),
    color: Colors.Oslo_Gray,
    marginLeft: Metrics.ratio(8),
  },
});
