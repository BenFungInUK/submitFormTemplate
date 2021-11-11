import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Colour } from '../../constants'
import { useAppDispatch } from '../../hooks'
import { setScreen } from '../../redux/submitFormSlice'

// interface Props {
// 	navigation: StackNavigationProp<RootStackParamList, 'Done'>
// }

export default function Done() {
	console.log('Done here')
	const dispatch = useAppDispatch()
	return (
		<View style={styles.container}>
			<Text>Done</Text>
			<Button onPress={() => dispatch(setScreen('Home'))} title="Go back to HomeScreen" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colour.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
