import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    // width: Metrics.screenWidth * 0.432, // For 2 x 2
    width: Metrics.screenWidth * 0.274, // For 3 x 3
    backgroundColor: Colors.White,
    alignItems: 'center',
    margin: Metrics.ratio(8),
    borderRadius: Metrics.ratio(8),
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
  cardImage: {
    // width: Metrics.screenWidth * 0.432, // For 2 x 2
    // height: Metrics.screenWidth * 0.432, // For 2 x 2
    width: Metrics.screenWidth * 0.274, // For 3 x 3
    height: Metrics.screenWidth * 0.274, // For 3 x 3
  },
  cardText: {
    // fontSize: Metrics.ratio(14), // For 2 x 2
    fontSize: Metrics.ratio(12), // For 3 x 3
    color: Colors.Cod_Gray,
    textTransform: 'capitalize',
    padding: Metrics.ratio(8),
    textAlign: 'center',
  },
});
