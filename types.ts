export type RootStackParamList = {
	Home: undefined
	Confirm: undefined
	Login: undefined
	Done: undefined
}

export type ConfirmPageParamList = {
	mail: string
	password: string
	gender: number
}

export type UserCount = {
	count: number
}

export type UserGender = {
	gender: number
}

export type LoginType = {
	action: string
}

export type RootStackNameList = {
	Home: 'Home'
	Confirm: 'Confirm'
	Done: 'Done'
}
