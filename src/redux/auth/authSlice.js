import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
