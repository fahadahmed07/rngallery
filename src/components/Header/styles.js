import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
  },
  menuImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop: Metrics.ratio(-4),
    fontWeight: 'bold',
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Metrics.ratio(20),
    color: Colors.Cod_Gray,
  },
});
