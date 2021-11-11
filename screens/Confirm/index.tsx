import React from 'react'
// import { RouteProp } from '@react-navigation/native'
import { StyleSheet, ImageBackground, Text, View } from 'react-native'
import { Colour } from '../../constants'
import { Card, Input, CheckBox, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectUserInfo } from '../../redux/selector'
import { setScreen } from '../../redux/submitFormSlice'

// interface Props {
//	route: RouteProp<RootStackParamList, 'Confirm'>
// 	navigation: StackNavigationProp<RootStackParamList, 'Confirm'>
// }

export default function Confirm() {
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/background2.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<Card>
					<Card.Title>CONFIRM SUBMIT</Card.Title>
					<Card.Divider />
					<Card.Image source={require('../../assets/icon.png')} />
					<Text style={styles.cardTextContainer}>
						A testing input form build with React Native Elements component.
					</Text>
					<Input
						disabled={true}
						leftIcon={<Icon name="email" size={24} color="black" />}
						style={styles.normalText}
						labelStyle={styles.cardTextContainer}
						renderErrorMessage={false}
						value={userInfo.mail}
					/>
					<Input
						disabled={true}
						leftIcon={{ type: 'material', name: 'lock' }}
						style={styles.normalText}
						renderErrorMessage={false}
						value={userInfo.password}
					/>
					<CheckBox
						disabled={true}
						title="Check here to indicate that you have agreed to our Terms and read out Data Usage Policy."
						containerStyle={styles.cardTextContainer}
						checked={true}
					/>
					<Button onPress={() => dispatch(setScreen('Done'))} title="Go to Done" />
				</Card>
			</ImageBackground>
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
	cardTextContainer: {
		marginTop: 20,
		marginBottom: 20,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	normalText: {
		fontSize: 14,
		marginLeft: 10,
	},
})
