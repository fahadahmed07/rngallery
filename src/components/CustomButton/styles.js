import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Apple,
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(100),
    padding: Metrics.ratio(10),
    marginTop: Metrics.ratio(20),
    marginHorizontal: Metrics.ratio(16),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btnText: {
    fontSize: Metrics.ratio(18),
    fontWeight: 'bold',
    color: Colors.White,
  },
});
