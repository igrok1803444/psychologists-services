import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: {
    name: "",
    email: "",
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
      console.log(action);
      state.isLoggedIn = true;
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
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
