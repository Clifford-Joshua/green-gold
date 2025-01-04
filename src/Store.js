import { configureStore } from "@reduxjs/toolkit";
import NavReducer from "./Shared/Features/NavSlice";
import UserReducer from "./Shared/Features/UserSlice";

export const store = configureStore({
  reducer: {
    mobileNav: NavReducer,
    user: UserReducer,
  },
});
