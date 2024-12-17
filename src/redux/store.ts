import { configureStore } from '@reduxjs/toolkit'
import  LangSlice  from './lang'
import  AuthSlice  from './auth'

export default configureStore({
  reducer: {
    lang: LangSlice,
    token: AuthSlice,
  },
})