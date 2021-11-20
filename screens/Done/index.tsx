import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Colour } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectUserInfo } from '../../redux/selector'
import { setScreen, setUserInfo, initialState } from '../../redux/submitFormSlice'

// interface Props {
// 	navigation: StackNavigationProp<RootStackParamList, 'Done'>
// }

export default function Done() {
	console.log('Done here')
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<View style={styles.container}>
			<Text style={styles.normalText}>
				All data has been saved to our server. {'\n'}Thankyou for using our service!
			</Text>
			<View style={styles.actionButtonContainer}>
				<Button
					disabled={userInfo.mail === ''}
					onPress={() => dispatch(setScreen('Login'))}
					title="Go back"
				/>
				<Text style={styles.separator} />
				<Button
					onPress={() => {
						dispatch(setUserInfo(initialState.userInfo))
						dispatch(setScreen('Home'))
					}}
					title="Logout / Home Screen"
				/>
			</View>
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
	normalText: {
		fontSize: 14,
		marginLeft: 10,
		marginBottom: 10,
		textAlign: 'center',
	},
	actionButtonContainer: {
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-between',
	},
	separator: {
		margin: 10,
	},
})
