// import { configureStore } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
// import rootReducer from './rootReducer'
// import thunkMiddleware from 'redux-thunk'
// const store = configureStore({
//   reducer: rootReducer,
//   middleware:[thunkMiddleware]
// })

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

// export default store

import { configureStore } from '@reduxjs/toolkit'
import authReducer  from '../store/slices/authSlice'
import productReducer from '../store/slices/productSlice'


export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch