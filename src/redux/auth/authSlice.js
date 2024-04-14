import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: {
    name: "",
    email: "",
    id: "",
  },
  isLoggedIn: false,
  isLoading: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
      state.user.id = action.payload.uid;
      state.token = action.payload.accessToken;
    },
    resetUser: (state) => {
      state.user = {};
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser, resetUser } = authSlice.actions;
