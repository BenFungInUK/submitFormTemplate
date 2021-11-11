import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'
import { store } from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
				<StatusBar style="auto" />
			</SafeAreaProvider>
		</Provider>
	)
}
