import React from 'react';
import { View, Text } from 'react-native';
import global from '../style/global';

export default class Home extends React.Component {
	render() {
		return (
			<View style={global.centered}>
				<Text>Search</Text>
			</View>
		);
	}
}
