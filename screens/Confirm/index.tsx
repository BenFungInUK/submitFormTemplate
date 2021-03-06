import React, { useState } from 'react'
// import { RouteProp } from '@react-navigation/native'
import { StyleSheet, ImageBackground, Text, View } from 'react-native'
import { Colour } from '../../constants'
import { Card, Input, CheckBox, ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAppSelector } from '../../hooks'
import { selectUserInfo } from '../../redux/selector'
import { SubmitButton } from '../../components'

// interface Props {
//	route: RouteProp<RootStackParamList, 'Confirm'>
// 	navigation: StackNavigationProp<RootStackParamList, 'Confirm'>
// }

export default function Confirm() {
	const userInfo = useAppSelector(selectUserInfo)
	const [selectedGender, setSelectedGender] = useState(0)

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/background2.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<Card containerStyle={styles.cardContainer}>
					<Card.Title>CREATE USER</Card.Title>
					<Card.Divider />
					<Card.Image source={require('../../assets/icon.png')} />
					<Text style={styles.cardTextContainer}>
						Please check you have input the correct information and select your gender for record.
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
					<View style={styles.buttonGroupContainer}>
						<Text style={styles.genderText}>Gender:</Text>
						<ButtonGroup
							onPress={(index) => setSelectedGender(index)}
							selectedIndex={selectedGender}
							buttons={['Male', 'Female']}
							containerStyle={styles.buttonGroup}
						/>
					</View>
					<CheckBox
						disabled={true}
						title="Check here to indicate that you have agreed to our Terms and read out Data Usage Policy."
						containerStyle={styles.cardTextContainer}
						checked={true}
					/>
					<SubmitButton
						navParam={{ mail: userInfo.mail, password: userInfo.password, gender: selectedGender }}
					/>
					{/* <Button onPress={() => dispatch(setScreen('Done'))} title="Go to Done" /> */}
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
	buttonGroupContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		marginLeft: 10,
	},
	genderText: {
		flex: 1,
	},
	buttonGroup: {
		flex: 3,
	},
})
