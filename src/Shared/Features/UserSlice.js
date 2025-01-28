import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  number: "",
  username: "",
  password: "",
  isUser: false,
  isName: false,
  isEmail: false,
  isLogin: false,
  isUserName: false,
  isPassWord: false,
  isNumber: false,
  isConfirmPassWord: false,
  confirmPassword: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkName: (state, action) => {
      state.isName = action.payload;
    },
    checkUserName: (state, action) => {
      state.isUserName = action.payload;
    },
    checkPassWord: (state, action) => {
      state.isPassWord = action.payload;
    },
    checkConfirmPassWord: (state, action) => {
      state.isConfirmPassWord = action.payload;
    },
    checkEmail: (state, action) => {
      state.isEmail = action.payload;
    },
    checkNumber: (state, action) => {
      state.isNumber = action.payload;
    },
    isUserLogin: (state) => {
      state.isUser = true;
      state.isLogin = true;
    },
    isUserLogout: (state) => {
      state.isLogin = false;
    },
    isLocalStorageUserLogin: (state) => {
      if (localStorage.getItem("isUser")) {
        state.isUser = localStorage.getItem("isUser");

        if (localStorage.getItem("isLogin")) {
          state.isLogin = localStorage.getItem("isLogin");
        }
      }
      if (sessionStorage.getItem("isUser")) {
        state.isUser = sessionStorage.getItem("isUser");
      }
    },
  },
});

export const {
  checkConfirmPassWord,
  checkEmail,
  checkName,
  checkNumber,
  checkPassWord,
  checkUserName,
  isUserLogin,
  isUserLogout,
  isLocalStorageUserLogin,
} = UserSlice.actions;

export default UserSlice.reducer;
