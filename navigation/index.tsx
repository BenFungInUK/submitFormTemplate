import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import ConfirmScreen from '../screens/Confirm'
import LoginScreen from '../screens/Login'
import DoneScreen from '../screens/Done'
import { RootStackParamList } from '../types'
import { useAppSelector } from '../hooks'
import { selectScreen } from '../redux/selector'

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	const screen = useAppSelector(selectScreen)
	console.log('render root')
	console.log(screen)
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{screen === 'Done' ? (
				<Stack.Screen name="Done" component={DoneScreen} />
			) : screen === 'Confirm' ? (
				<Stack.Screen name="Confirm" component={ConfirmScreen} />
			) : screen === 'Login' ? (
				<Stack.Screen name="Login" component={LoginScreen} />
			) : (
				<Stack.Screen name="Home" component={HomeScreen} />
			)}
		</Stack.Navigator>
	)
}
