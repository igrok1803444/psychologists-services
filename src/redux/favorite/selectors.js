import { createSelector } from "@reduxjs/toolkit";
import { selectUser } from "redux/auth/selectors";
import { selectFilter } from "redux/filter/selectors";

export const selectFavoriteList = (state) => state.favorite.items;

export const selectUsersFavorites = createSelector(
  [selectFavoriteList, selectUser],
  (favorites, user) => {
    return favorites.filter((item) => item.owner === user.id);
  }
);

export const SelectOrdereFavorites = createSelector(
  [selectUsersFavorites, selectFilter],
  (specialists, filter) => {
    let dataArray = specialists.filter((item) => {
      if (item) {
        return item;
      }
      return null;
    });

    switch (filter) {
      case "A-to-Z":
        dataArray.sort((a, b) => {
          const { name: aName } = a;
          const { name: bName } = b;

          return aName.toUpperCase().localeCompare(bName.toUpperCase());
        });

        break;
      case "Z-to-A":
        dataArray.sort((a, b) => {
          const { name: aName } = a;
          const { name: bName } = b;

          return bName.toUpperCase().localeCompare(aName.toUpperCase());
        });
        break;
      case "less-10":
        dataArray = [...dataArray].filter((item) => item.price_per_hour <= 10);
        break;
      case "more-10":
        dataArray = [...dataArray].filter((item) => item.price_per_hour >= 10);

        break;
      case "popular":
        dataArray.sort((a, b) => {
          return Number(b.rating) - Number(a.rating);
        });

        break;
      case "unpopular":
        dataArray.sort((a, b) => Number(a.rating) - Number(b.rating));

        break;

      default:
        break;
    }

    return dataArray;
  }
);
