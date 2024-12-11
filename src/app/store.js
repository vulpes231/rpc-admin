import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import userReducer from "../features/userSlice";
import poolReducer from "../features/poolSlice";
import trnxReducer from "../features/trnxSlice";

const store = configureStore({
  reducer: {
    auth: loginReducer,
    users: userReducer,
    invest: poolReducer,
    trnx: trnxReducer,
  },
});

export default store;
