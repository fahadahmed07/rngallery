import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Aqua_Haze,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.ratio(24),
  },
  chooseImageContainer: {
    width: Metrics.screenWidth * 0.6,
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Oslo_Gray,
    borderStyle: 'dashed',
    borderRadius: Metrics.ratio(16),
    padding: Metrics.ratio(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: Metrics.ratio(14),
    color: Colors.Oslo_Gray,
    marginTop: Metrics.ratio(4),
  },
});
