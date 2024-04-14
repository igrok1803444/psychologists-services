import { createSelector } from "@reduxjs/toolkit";
import { selectUser } from "redux/auth/selectors";

export const selectFavoriteList = (state) => state.favorite.items;

export const selectUsersFavorites = createSelector(
  [selectFavoriteList, selectUser],
  (favorites, user) => {
    return favorites.filter((item) => item.owner === user.id);
  }
);
