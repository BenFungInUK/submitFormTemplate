import React, { useState } from 'react'
import { StyleSheet, ImageBackground, Text, View, StyleProp, ViewStyle } from 'react-native'
import { Colour } from '../../constants'
import { Card, Input, CheckBox, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useGetUserCountQuery } from '../../services'
import { LoginButton } from '../../components'

// interface Props {
// 	navigation: StackNavigationProp<RootStackParamList, 'Home'>
// }

export default function Home() {
	const [isChecked, setChecked] = useState(false)
	const [isSecureEntry, setSecureEntry] = useState(true)
	const [secureImg, setSecureImg] = useState('visibility')
	const [mailErrMsg, setMailError] = useState('')
	const [passErrMsg, setPassError] = useState('')
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/background2.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<Card containerStyle={styles.cardContainer}>
					<Card.Title>SUBMIT FORM</Card.Title>
					<Card.Divider />
					<Card.Image source={require('../../assets/icon.png')} />
					<UserCountText />
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
					<LoginButton
						disabled={!isChecked || mailErrMsg !== '' || passErrMsg !== ''}
						navParam={{ mail: mail, password: password, gender: 0 }}
					/>
				</Card>
			</ImageBackground>
		</View>
	)

	function RegExValidation(inputText: string, regEx: string, inputType: number) {
		// console.log('Validate, %s, %s, %i', inputText, regEx, inputType)
		const condition = new RegExp(regEx)
		const regResult = condition.test(inputText)
		// console.log(regResult)
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

	function UserCountText() {
		const { data: userCount, isLoading, isFetching } = useGetUserCountQuery(0)
		return (
			<Text style={styles.cardTextContainer}>
				{isLoading ? (
					<>Loading...</>
				) : userCount ? (
					isFetching ? (
						<>Fetching...</>
					) : (
						<>
							A testing input form build with React Native Elements component.{'\n'}Current number
							of user on server: {userCount.count}
						</>
					)
				) : (
					<>A testing input form build with React Native Elements component.</>
				)}
			</Text>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colour.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	cardTextContainer: {
		marginTop: 20,
		marginBottom: 20,
		paddingRight: 10,
		textAlign: 'justify',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	normalText: {
		flex: 1,
		fontSize: 14,
		marginLeft: 10,
		textAlign: 'justify',
	},
})
