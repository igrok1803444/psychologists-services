import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: {
    name: "",
    email: "",
    id: "",
  },
  isLoggedIn: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
      state.user.id = action.payload.uid;
    },
    resetUser: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser, resetUser, setIsLoading } = authSlice.actions;
