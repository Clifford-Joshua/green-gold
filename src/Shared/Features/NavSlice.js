import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
  isSideNavOpen: false,
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
    SideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
});

export const { upDateNav, closeNav, SideNav } = NavSlice.actions;

export default NavSlice.reducer;
