import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import ConfirmScreen from '../screens/Confirm'
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
	// const [stackScreen, setStackScreen] = React.useState('Home')
	const screen = useAppSelector(selectScreen)
	// React.useEffect(() => setStackScreen(screen), [screen])
	console.log('render root')
	console.log(screen)
	// console.log(stackScreen)
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{screen === 'Done' ? (
				<Stack.Screen name="Done" component={DoneScreen} />
			) : screen === 'Confirm' ? (
				<Stack.Screen name="Confirm" component={ConfirmScreen} />
			) : (
				<Stack.Screen name="Home" component={HomeScreen} />
			)}
		</Stack.Navigator>
	)
}
