import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Colour } from '../../constants'
import { RootStackParamList } from '../../types'

interface Props {
	navigation: StackNavigationProp<RootStackParamList, 'Done'>
}

export default function Done({ navigation }: Props) {
	return (
		<View style={styles.container}>
			<Text>Done</Text>
			<Button onPress={() => navigation.goBack()} title="Go back from ProfileScreen" />
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
