import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import billReducer from "@/features/bill/billSlice";
import { api } from "@/services/api";

const rootReducer = combineReducers({
  auth: authReducer,
  bill: billReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
