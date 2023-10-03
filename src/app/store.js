import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import presskitReducer from '../features/presskit/presskitSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    presskit: presskitReducer
  }
})
