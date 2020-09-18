import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Snow_Drift,
  },
  listCardContainer: {
    flex: 1,
    paddingVertical: Metrics.ratio(8),
    alignItems: 'center',
  },
  gridCardContainer: {
    flex: 1,
    padding: Metrics.ratio(8),
  },
  nothingTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nothingText: {
    fontSize: Metrics.ratio(16),
    color: Colors.Cod_Gray,
    textAlign: 'center',
  },
});
