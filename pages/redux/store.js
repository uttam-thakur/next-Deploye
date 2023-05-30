import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/homeApi";
import nextMatch from "./slice/homeNextMatch";
import newsPost  from "./slice/homeNews"
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    nextMatche: nextMatch ,
    newsPost: newsPost ,
  },
});