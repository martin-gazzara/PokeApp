import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import InfoScreen from '../screens/Info';


const TabNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Info: {
      screen: InfoScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(TabNavigator)