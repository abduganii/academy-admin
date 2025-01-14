import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface metaState {
  token: string;
}

const initialState: metaState = {
  token: "",
};
export const AuthSlice = createSlice({
  initialState,
  name: "token",
  reducers: {
    HandleAuth: (state: any, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { HandleAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
