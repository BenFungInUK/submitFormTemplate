import React, { useState } from 'react'
import { StyleSheet, ImageBackground, Text, View, StyleProp, ViewStyle } from 'react-native'
import { Colour } from '../../constants'
import { Card, Input, CheckBox, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAppDispatch } from '../../hooks'
import { setScreen, setUserInfo } from '../../redux/submitFormSlice'

// interface Props {
// 	navigation: StackNavigationProp<RootStackParamList, 'Home'>
// }

export default function Home() {
	const [isChecked, setChecked] = useState(false)
	const [isSecureEntry, setSecureEntry] = useState(true)
	const [secureImg, setSecureImg] = useState('visibility')
	const [mailErrMsg, setMailError] = useState('')
	const [passErrMsg, setPassError] = useState('')

	// Cannot use useRef in react-native-elements
	// const inputMailRef = useRef<typeof Input>(null)
	// const inputPasswordRef = useRef<typeof Input>(null)
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')

	// const [isLoading, setLoading] = useState(false)
	const dispatch = useAppDispatch()
	// React.useEffect(
	// 	() =>
	// 		navigation.addListener('focus', () => {
	// 			console.log('focus Home')
	// 			dispatch(setScreen('Confirm'))
	// 		}),
	// 	[navigation, dispatch]
	// )

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/background2.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<Card>
					<Card.Title>SUBMIT FORM</Card.Title>
					<Card.Divider />
					<Card.Image source={require('../../assets/icon.png')} />
					<Text style={styles.cardTextContainer}>
						A testing input form build with React Native Elements component.
					</Text>
					<Input
						placeholder="email@address.com"
						leftIcon={<Icon name="email" size={24} color="black" />}
						style={styles.normalText}
						onChangeText={(value) => {
							RegExValidation(value, '^[a-zA-Z0-9](?=.*[@])[a-zA-Z0-9@.]+$', 0)
							setMail(value)
						}}
						labelStyle={styles.cardTextContainer}
						renderErrorMessage={false}
						errorStyle={Colour.red as StyleProp<ViewStyle>}
						errorMessage={mailErrMsg}
					/>
					<Input
						placeholder="Password"
						leftIcon={{ type: 'material', name: 'lock' }}
						style={styles.normalText}
						secureTextEntry={isSecureEntry}
						onChangeText={(value) => {
							RegExValidation(
								value,
								'^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$',
								1
							)
							setPassword(value)
						}}
						renderErrorMessage={false}
						errorStyle={Colour.red as StyleProp<ViewStyle>}
						errorMessage={passErrMsg}
						rightIcon={
							<Button
								icon={<Icon name={secureImg} size={24} color="black" />}
								onPress={() => {
									isSecureEntry ? setSecureImg('visibility-off') : setSecureImg('visibility')
									setSecureEntry(!isSecureEntry)
								}}
								type="clear"
							/>
						}
					/>
					<CheckBox
						title="Check here to indicate that you have agreed to our Terms and read out Data Usage Policy."
						containerStyle={styles.cardTextContainer}
						textStyle={styles.normalText}
						checked={isChecked}
						onPress={() => setChecked(!isChecked)}
					/>
					<Button
						disabled={!isChecked || mailErrMsg !== '' || passErrMsg !== ''}
						title="Go to Confirm"
						onPress={() => {
							dispatch(setUserInfo({ mail: mail, password: password }))
							dispatch(setScreen('Confirm'))
						}}
					/>
					{/* <NavigationButton
						disabled={!isChecked || mailErrMsg !== '' || passErrMsg !== ''}
						navigation={navigation}
						title="Go to Confirm"
						targetScreen="Confirm"
						navParam={{ mail: mail, password: password }}
					/> */}
					{/* <SubmitButton
						loading={false}
						disabled={!isChecked || mailErrMsg !== '' || passErrMsg !== ''}
						navigation={navigation}
						targetScreen="Done"
						navParam={{ mail: mail, password: password }}
					/> */}
				</Card>
			</ImageBackground>
		</View>
	)

	function RegExValidation(inputText: string, regEx: string, inputType: number) {
		console.log('Validate, %s, %s, %i', inputText, regEx, inputType)
		const condition = new RegExp(regEx)
		const regResult = condition.test(inputText)
		console.log(regResult)
		if (!regResult) {
			inputType === 0
				? setMailError('Should be in format email@address')
				: setPassError(
						'Should be at least 8 characters and include at least one alphabet, number and special character'
				  )
		} else {
			inputType === 0 ? setMailError('') : setPassError('')
		}
		return regResult
	}
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
		paddingRight: 30,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	normalText: {
		fontSize: 14,
		marginLeft: 10,
		textAlign: 'justify',
	},
})
