import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConfirmPageParamList } from '../types'

export interface SubmitFormState {
	userInfo: ConfirmPageParamList
	screenToDisplay: string
}

export const initialState: SubmitFormState = {
	userInfo: { mail: '', password: '', gender: 1 },
	screenToDisplay: 'Home',
}

export const submitFormSlice = createSlice({
	name: 'submitForm',
	initialState,
	reducers: {
		setUserInfo: (state, action: PayloadAction<ConfirmPageParamList>) => {
			state.userInfo = action.payload
		},
		setScreen: (state, action: PayloadAction<string>) => {
			state.screenToDisplay = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setUserInfo, setScreen } = submitFormSlice.actions

export default submitFormSlice.reducer
