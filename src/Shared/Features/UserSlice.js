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
  isDashBoard: true,
  isAssignment: false,
  isSyllabus: false,
  isAttendance: false,
  isSetting: false,
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
        state.isUser = JSON.parse(localStorage.getItem("isUser"));

        if (localStorage.getItem("isLogin")) {
          state.isLogin = JSON.parse(localStorage.getItem("isLogin"));
        }
      }
      if (sessionStorage.getItem("isUser")) {
        state.isUser = JSON.parse(sessionStorage.getItem("isUser"));
      }
    },
    checkDashboard: (state) => {
      state.isSetting = false;
      state.isSyllabus = false;
      state.isDashBoard = true;
      state.isAssignment = false;
      state.isAttendance = false;
    },
    checkAssignment: (state) => {
      state.isSetting = false;
      state.isSyllabus = false;
      state.isDashBoard = false;
      state.isAssignment = true;
      state.isAttendance = false;
    },
    checkSyllabus: (state) => {
      state.isSetting = false;
      state.isSyllabus = true;
      state.isDashBoard = false;
      state.isAssignment = false;
      state.isAttendance = false;
    },
    checkAttendance: (state) => {
      state.isSetting = false;
      state.isSyllabus = false;
      state.isDashBoard = false;
      state.isAssignment = false;
      state.isAttendance = true;
    },
    checkSetting: (state) => {
      state.isSetting = true;
      state.isSyllabus = false;
      state.isDashBoard = false;
      state.isAssignment = false;
      state.isAttendance = false;
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
  checkAssignment,
  checkAttendance,
  checkDashboard,
  checkSetting,
  checkSyllabus,
} = UserSlice.actions;

export default UserSlice.reducer;
