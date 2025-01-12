import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface metaState {
  dirty: boolean;
}

const initialState: metaState = {
  dirty: false,
};
export const DirtySlice = createSlice({
  initialState,
  name: "dirty",
  reducers: {
    changeDirty: (state: any, action: PayloadAction<boolean>) => {
      state.dirty = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDirty } = DirtySlice.actions;

export default DirtySlice.reducer;
