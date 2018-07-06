import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});