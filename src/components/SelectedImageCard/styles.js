import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.ratio(16),
    backgroundColor: Colors.Aqua_Haze,
  },
  selectedImageContainer: {
    borderRadius: Metrics.ratio(16),
    overflow: 'hidden',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: Metrics.ratio(150),
    height: Metrics.ratio(150),
  },
});
