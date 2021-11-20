import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Button, ButtonProps } from 'react-native-elements'
import { Colour } from '../constants'
import { useDeleteUserMutation } from '../services'
import { useAppDispatch, useAppSelector } from '../hooks'
import { selectUserInfo } from '../redux/selector'
import { setScreen, setUserInfo } from '../redux/submitFormSlice'

//interface Props {
//targetScreen: keyof RootStackParamList
//navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>
//navParam: ConfirmPageParamList
// onClick: void
//}
interface ApiError {
	status: string
	error: string
}

export function DeleteButton(props: ButtonProps) {
	const [deleteUser, { isLoading }] = useDeleteUserMutation()
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	const showAlert = (err: ApiError) => {
		Alert.alert('An error occurred', "We couldn't delete the user, try again!" + err.error, [
			{ text: 'OK', onPress: () => console.log(err) },
		])
	}

	function isApiError(x: unknown | ApiError): x is ApiError {
		return typeof (x as ApiError).error === 'string'
	}

	//Delete user from mysql, logout and navigate to Done view
	const handleCreateUser = async () => {
		try {
			console.log('Try!')
			await deleteUser(userInfo).unwrap()
			dispatch(setUserInfo({ mail: '', password: '', gender: 0 }))
			dispatch(setScreen('Done'))
		} catch (err) {
			console.log('Catch!')
			if (isApiError(err)) showAlert(err)
		} finally {
			console.log('Submit!')
		}
	}

	return (
		<Button
			{...props}
			buttonStyle={styles.applyButton}
			containerStyle={styles.container}
			title="Delete User"
			loading={isLoading}
			onPress={handleCreateUser}
		/>
	)
}

const styles = StyleSheet.create({
	applyButton: {
		backgroundColor: Colour.red,
	},
	container: {
		flex: 1,
		marginLeft: 5,
	},
})

export default DeleteButton
