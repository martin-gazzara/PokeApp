import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Secondary';


const TabNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingScreen
})

export default createAppContainer(TabNavigator)