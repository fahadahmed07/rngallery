import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(16),
    marginVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(8),
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
    width: Metrics.screenWidth * 0.22,
    height: Metrics.screenWidth * 0.22,
    borderRadius: Metrics.ratio(8),
  },
  cardText: {
    flex: 1,
    fontSize: Metrics.ratio(14),
    color: Colors.Cod_Gray,
    textTransform: 'capitalize',
    marginLeft: Metrics.ratio(8),
  },
});
