import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types'
import { StyleSheet } from 'react-native'
import { Button, ButtonProps } from 'react-native-elements'

interface Props extends ButtonProps {
	targetScreen: keyof RootStackParamList
	navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>
	navParam: undefined
	// onClick: void
}

export function NavigationButton(props: Props) {
	const { navigation, targetScreen, navParam, ...rest } = props

	function onButtonPressed() {
		navigation.navigate(targetScreen, navParam)
		console.log('Navigate to %s', targetScreen)
	}

	return <Button {...rest} onPress={onButtonPressed} buttonStyle={styles.applyButton} />
}

const styles = StyleSheet.create({
	applyButton: {
		borderRadius: 0,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 0,
	},
})

export default NavigationButton
