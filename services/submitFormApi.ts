import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ConfirmPageParamList, UserCount, LoginType, UserGender } from '../types'

// Define a service using a base URL and expected endpoints
// url: http://192.168.1.6:3000/createUser
export const submitFormApi = createApi({
	reducerPath: 'submitFormApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.6:3000/' }),
	endpoints: (builder) => ({
		createUserByMail: builder.mutation<ConfirmPageParamList, ConfirmPageParamList>({
			query(body) {
				console.log('createUserByMail log')
				console.log(JSON.stringify(body))
				return {
					url: 'createUser',
					headers: { 'Content-Type': 'application/json' },
					method: 'POST',
					body,
				}
			},
		}),
		getUserCount: builder.query<UserCount, Number>({
			query: () => ({ url: 'getUserCount' }),
			transformResponse: (response: { response: UserCount[] }) => response.response[0],
		}),
		getUserGender: builder.mutation<UserGender, Pick<ConfirmPageParamList, 'mail'>>({
			query(body) {
				console.log('gender body')
				console.log(body)
				return {
					url: 'getUserGender',
					headers: { 'Content-Type': 'application/json' },
					method: 'POST',
					body,
				}
			},
			transformResponse: (response: { response: UserGender[] }) => response.response[0],
		}),
		loginRequest: builder.mutation<LoginType, ConfirmPageParamList>({
			query(body) {
				console.log('login body')
				console.log(body)
				return {
					url: 'loginRequest',
					headers: { 'Content-Type': 'application/json' },
					method: 'POST',
					body,
				}
			},
			transformResponse: (response: { response: LoginType }) => response.response,
		}),
		updateUser: builder.mutation<ConfirmPageParamList, Partial<ConfirmPageParamList>>({
			query(body) {
				return {
					url: 'updateUser',
					headers: { 'Content-Type': 'application/json' },
					method: 'PUT',
					body,
				}
			},
		}),
		deleteUser: builder.mutation<ConfirmPageParamList, Partial<ConfirmPageParamList>>({
			query(body) {
				return {
					url: 'deleteUser',
					headers: { 'Content-Type': 'application/json' },
					method: 'DELETE',
					body,
				}
			},
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useDeleteUserMutation,
	useGetUserCountQuery,
	useGetUserGenderMutation,
	useLoginRequestMutation,
	useUpdateUserMutation,
	useCreateUserByMailMutation,
} = submitFormApi
