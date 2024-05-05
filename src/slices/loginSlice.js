import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/login/login_api";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ loginParam, successFn, failFn }) => {
    try {
      const res = await loginPost({ loginParam, successFn, failFn });
      return res;
    } catch (error) {
      return error;
    }
  },
);
const initState = {
  result: "0",
};
const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  
  reducers: {
    login: (state, action) => {
      console.log("login");
      console.log(action.payload);
      return { result: "1" };
    },
    logout: (state, action) => {
      console.log("logout");
      removeCookie("member", "/");
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('userAuth');
      return { ...initState };
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(loginPostAsync.fulfilled, (state, action) => {
  //       console.log("fulfilled");
  //       const payload = action.payload;
  //       console.log("payload", payload);
  //       if (!payload.error) {
  //         setCookie("member", JSON.stringify(payload));
  //         sessionStorage.setItem('isLogin', 'true');
  //         sessionStorage.setItem('userAuth', action.payload.auth);
  //         return {...state, isLogin: true, iuser: payload.iuser }
  //       } else {
  //         console.log(payload.error);
  //       }
  //       return payload;
  //     })
  //     .addCase(loginPostAsync.pending, (state, action) => {
  //       console.log("pending");
  //     })
  //     .addCase(loginPostAsync.rejected, (state, action) => {
  //       console.log("rejected");
  //     });
  // },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
