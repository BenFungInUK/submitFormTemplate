import React from 'react'
import { Alert } from 'react-native'
import { Button, ButtonProps } from 'react-native-elements'
import { ConfirmPageParamList } from '../types'
import { useLoginRequestMutation, useGetUserGenderMutation } from '../services'
import { useAppDispatch } from '../hooks'
import { setScreen, setUserInfo } from '../redux/submitFormSlice'

interface Props extends ButtonProps {
	navParam: ConfirmPageParamList
}

interface ApiError {
	status: string
	error: string
}

export function LoginButton(props: Props) {
	const { navParam, ...rest } = props
	const [loginRequest, { isLoading }] = useLoginRequestMutation()
	const [getUserGender] = useGetUserGenderMutation()
	const dispatch = useAppDispatch()

	const showAlert = (err: ApiError) => {
		Alert.alert('An error occurred', err.error, [{ text: 'OK', onPress: () => console.log(err) }])
	}

	function isApiError(x: unknown | ApiError): x is ApiError {
		return typeof (x as ApiError).error === 'string'
	}

	//save data to redux store, and then navigate to corresponding view
	const handleLoginRequest = async () => {
		try {
			console.log('handle')
			const loginAction = await loginRequest(navParam).unwrap()
			console.log(loginAction)
			switch (loginAction.action) {
				case 'CreateUser':
					dispatch(setUserInfo(navParam))
					dispatch(setScreen('Confirm'))
					break
				case 'Login':
					await getUserGender(navParam)
						.unwrap()
						.then((result) => {
							dispatch(
								setUserInfo({
									mail: navParam.mail,
									password: navParam.password,
									gender: result.gender,
								})
							)
							dispatch(setScreen('Login'))
						})
					break
				case 'InvalidPassword':
					showAlert({ error: 'Login Fail! Invalid Password!', status: 'error' })
					break
				default:
					console.log(loginAction)
					break
			}
		} catch (err) {
			if (isApiError(err)) showAlert(err)
		} finally {
			console.log('Submit!')
		}
	}

	return (
		<Button {...rest} title="Sign up / Login" loading={isLoading} onPress={handleLoginRequest} />
	)
}

export default LoginButton
