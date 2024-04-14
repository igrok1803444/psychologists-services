import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  value: "green",
};
const themeSlice = createSlice({
  name: "filter",
  initialState: themeInitialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
