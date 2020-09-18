import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Util {
  // Set item in asyncstorage
  async setItem(key, value) {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('AsyncStorage#setItem error: ' + error.message);
    }
  }

  // Get item from asyncstorage
  async getItem(key) {
    return await AsyncStorage.getItem(key).then((result) => {
      if (result) {
        try {
          result = JSON.parse(result);
        } catch (error) {
          console.error(
            'AsyncStorage#getItem error deserializing JSON for key: ' + key,
            error.message,
          );
        }
      }
      return result;
    });
  }

  showConfirmAlert(title, message, onPress) {
    Alert.alert(title, message, [{text: 'OK', onPress: onPress}], {
      cancelable: false,
    });
  }
}
export default new Util();
