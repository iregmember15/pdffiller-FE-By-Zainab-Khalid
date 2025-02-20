import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatchedCustomUser } from "api-client";

interface UserState {
  user: PatchedCustomUser | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetail: (state, action: PayloadAction<PatchedCustomUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { userDetail, clearUser } = userSlice.actions;
export default userSlice.reducer;
