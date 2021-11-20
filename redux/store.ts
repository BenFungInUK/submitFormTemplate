import { configureStore } from '@reduxjs/toolkit'
import submitFormReducer from './submitFormSlice'
import { submitFormApi } from '../services'

export const store = configureStore({
	reducer: {
		submitForm: submitFormReducer,
		[submitFormApi.reducerPath]: submitFormApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(submitFormApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
