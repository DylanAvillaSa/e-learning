import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./state/article";
export const store = configureStore({
  reducer: {
    token: articleReducer,
  },
});
