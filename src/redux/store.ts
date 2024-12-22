import { configureStore } from '@reduxjs/toolkit'
import  LangSlice  from './lang'
import  AuthSlice  from './auth'
import UserSlice  from './user'

export default configureStore({
  reducer: {
    lang: LangSlice,
    token: AuthSlice,
    user: UserSlice,
  },
})