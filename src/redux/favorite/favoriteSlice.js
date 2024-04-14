import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.item.id &&
          item.owner === action.payload.userId
      );

      console.log(index);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { removeFromFavorite, addToFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
