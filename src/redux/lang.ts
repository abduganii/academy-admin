import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface metaState {
    lang: string;
}

const initialState: metaState = {
lang: 'uz',
};
export const LangSlice = createSlice({
initialState,
  name: 'lang',
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLang } = LangSlice.actions

export default LangSlice.reducer