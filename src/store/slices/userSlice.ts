import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../@types/auth";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Accept only the user object
    userDetail: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { userDetail, clearUser } = userSlice.actions;
export default userSlice.reducer;
