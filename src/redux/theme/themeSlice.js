import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  value: "green",
};
const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
      console.log(1);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
