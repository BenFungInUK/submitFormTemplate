import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

interface Props {
	loading: boolean
	targetScreen: keyof RootStackParamList
	navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>
	navParam: undefined
	// onClick: void
}
export function SubmitButton({ loading, targetScreen, navigation, navParam }: Props) {
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(loading)
	}, [loading])

	function onButtonPressed() {
		//send data to mysql, finally navigate to Done view
		// onClick()
		navigation.navigate(targetScreen, navParam)
		console.log('Submit!')
	}

	return (
		<Button
			buttonStyle={styles.applyButton}
			title="Go to Done"
			loading={isLoading}
			onPress={onButtonPressed}
		/>
	)
}

const styles = StyleSheet.create({
	applyButton: {
		borderRadius: 0,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 0,
	},
})

export default SubmitButton
