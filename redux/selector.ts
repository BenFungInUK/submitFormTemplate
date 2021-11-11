import { RootState } from './store'

export const selectScreen = (state: RootState) => state.submitForm.screenToDisplay
export const selectUserInfo = (state: RootState) => state.submitForm.userInfo
