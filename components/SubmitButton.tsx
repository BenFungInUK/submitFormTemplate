import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { ConfirmPageParamList } from '../types'
import { useCreateUserByMailMutation } from '../services'
import { useAppDispatch } from '../hooks'
import { setScreen, setUserInfo } from '../redux/submitFormSlice'

//interface Props {
//targetScreen: keyof RootStackParamList
//navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>
//navParam: ConfirmPageParamList
// onClick: void
//}

interface Props {
	navParam: ConfirmPageParamList
}

interface ApiError {
	status: string
	error: string
}

export function SubmitButton({ navParam }: Props) {
	const [createUserByMail, { isLoading }] = useCreateUserByMailMutation()
	const dispatch = useAppDispatch()

	const showAlert = (err: ApiError) => {
		Alert.alert('An error occurred', "We couldn't save your data, try again!" + err.error, [
			{ text: 'OK', onPress: () => console.log(err) },
		])
	}

	function isApiError(x: unknown | ApiError): x is ApiError {
		return typeof (x as ApiError).error === 'string'
	}

	//send data to mysql, finally navigate to Done view
	const handleCreateUser = async () => {
		try {
			console.log('Try!')
			await createUserByMail(navParam).unwrap()
			dispatch(setUserInfo(navParam))
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
			buttonStyle={styles.applyButton}
			title="Submit & Go to Done"
			loading={isLoading}
			onPress={handleCreateUser}
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
