import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const NavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    upDateNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
  },
});

export const { upDateNav, closeNav } = NavSlice.actions;

export default NavSlice.reducer;
