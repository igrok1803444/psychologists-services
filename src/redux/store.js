import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { specialistsReducer } from "./specialists/specialistsSlice";
import { modalReduser } from "./modal/modalSlice";
import { themeReducer } from "./theme/themeSlice";
import { favoriteReducer } from "./favorite/favoriteSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { filterReducer } from "./filter/filterSlice";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: "items",
};
const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: "value",
};

const rootReducer = combineReducers({
  auth: authReducer,
  specialists: specialistsReducer,
  modal: modalReduser,
  theme: persistReducer(themePersistConfig, themeReducer),
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
