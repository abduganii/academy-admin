import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface metaState {
  Role: string;
}

const initialState: metaState = {
  Role: "",
};
export const RoleSlice = createSlice({
  initialState,
  name: "Role",
  reducers: {
    HandleRole: (state: any, action: PayloadAction<string>) => {
      state.Role = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { HandleRole } = RoleSlice.actions;

export default RoleSlice.reducer;
