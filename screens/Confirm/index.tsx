import React, { useState } from 'react'
// import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, ImageBackground, Text, View } from 'react-native'
import { Colour } from '../../constants'
// import { RootStackParamList } from '../../types'
import { Card, Input, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { SubmitButton } from '../../components'

// interface Props {
// 	navigation: StackNavigationProp<RootStackParamList, 'Confirm'>
// }

export default function Confirm(/*{ navigation }: Props*/) {
	const [isChecked, setChecked] = useState(false)

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
						The idea with React Native Elements is more about component structure than actual
						design.
					</Text>
					<Input
						disabled={true}
						leftIcon={<Icon name="email" size={24} color="black" />}
						style={styles.normalText}
						labelStyle={styles.cardTextContainer}
						renderErrorMessage={false}
						value={'test'}
					/>
					<Input
						disabled={true}
						leftIcon={{ type: 'material', name: 'lock' }}
						style={styles.normalText}
						renderErrorMessage={false}
					/>
					<CheckBox
						disabled={true}
						title="Check here to indicate that you have agreed to our Terms and read out Data Usage Policy."
						containerStyle={styles.cardTextContainer}
						checked={isChecked}
						onPress={() => setChecked(!isChecked)}
					/>
					{/* <SubmitButton loading={false} disabled={!isChecked} navigation={navigation} /> */}
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
