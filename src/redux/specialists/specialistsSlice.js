import { createSlice } from "@reduxjs/toolkit";

const specialistsInitialState = {
  items: [],
};
const specialistsSlice = createSlice({
  name: "specialists",
  initialState: specialistsInitialState,
  reducers: {
    setSpecialists: (state, action) => {
      state.items.push(...action.payload.filter((item) => item));
    },
  },
});

export const specialistsReducer = specialistsSlice.reducer;
export const { setSpecialists } = specialistsSlice.actions;
