import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/Pages/Home';
import Search from './src/Pages/Search';

export default class App extends React.Component {
	render() {
		// return <Text>Hello world</Text>;
		return <AppContainer />;
	}
}

const AppNavigator = createBottomTabNavigator(
	{
		Home: Home,
		Search: Search
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`;
					// IconComponent = HomeIconWithBadge;
				} else if (routeName === 'Search') {
					iconName = `ios-options`;
				}
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		}
	}
);

const AppContainer = createAppContainer(AppNavigator);
