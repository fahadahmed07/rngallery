import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  contentContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.Black,
  },
  cancelBtn: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Metrics.ratio(25),
    right: Metrics.ratio(8),
    zIndex: 10,
  },
  modalImage: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    resizeMode: 'contain',
  },
});
