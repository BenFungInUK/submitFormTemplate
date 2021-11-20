import React, { useState } from 'react'
// import { RouteProp } from '@react-navigation/native'
import { StyleSheet, ImageBackground, Text, View } from 'react-native'
import { Colour } from '../../constants'
import { Card, Input, CheckBox, ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAppSelector } from '../../hooks'
import { selectUserInfo } from '../../redux/selector'
import { UpdateButton, DeleteButton } from '../../components'

//Update and delete operation

export default function Login() {
	const userInfo = useAppSelector(selectUserInfo)
	const [selectedGender, setSelectedGender] = useState(userInfo.gender)

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/background2.jpg')}
				resizeMode="cover"
				style={styles.image}
			>
				<Card containerStyle={styles.cardContainer}>
					<Card.Title>USER INFO</Card.Title>
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
					<View style={styles.buttonGroupContainer}>
						<Text style={styles.genderText}>Gender:</Text>
						<ButtonGroup
							onPress={(index) => setSelectedGender(index)}
							selectedIndex={selectedGender}
							buttons={['Male', 'Female']}
							containerStyle={styles.buttonGroup}
						/>
					</View>
					{/* <ButtonGroup
						onPress={this.updateIndex}
						selectedIndex={selectedIndex}
						buttons={buttons}
						containerStyle={{height: 100}}
					/> */}
					<CheckBox
						disabled={true}
						title="Check here to indicate that you have agreed to our Terms and read out Data Usage Policy."
						containerStyle={styles.cardTextContainer}
						checked={true}
					/>
					<View style={styles.actionButtonContainer}>
						<UpdateButton
							navParam={{
								mail: userInfo.mail,
								password: userInfo.password,
								gender: selectedGender,
							}}
						/>
						<DeleteButton />
					</View>
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
	actionButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// minHeight: 40,
	},
})
