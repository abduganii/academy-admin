import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface metaState {
    user: string;
}

const initialState: metaState = {
    user: '',
};
export const UserSlice = createSlice({
initialState,
  name: 'user',
  reducers: {
    HandleUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { HandleUser } = UserSlice.actions

export default UserSlice.reducer