import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import ConfirmScreen from '../screens/Confirm'
import DoneScreen from '../screens/Done'
import { RootStackParamList } from '../types'

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Confirm" component={ConfirmScreen} />
			<Stack.Screen name="Done" component={DoneScreen} />
		</Stack.Navigator>
	)
}
