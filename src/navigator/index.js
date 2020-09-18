import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../containers/Home';
import AddPhoto from '../containers/AddPhoto';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  AddPhoto: {
    screen: AddPhoto,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(MainNavigator);
