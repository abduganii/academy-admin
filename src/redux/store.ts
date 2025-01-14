import { configureStore } from "@reduxjs/toolkit";
import LangSlice from "./lang";
import AuthSlice from "./auth";
import UserSlice from "./user";
import RoleSlice from "./role";
import DirtySlice from './dirty'

export default configureStore({
  reducer: {
    lang: LangSlice,
    token: AuthSlice,
    user: UserSlice,
    role: RoleSlice,
    dirty:DirtySlice
  },
});
