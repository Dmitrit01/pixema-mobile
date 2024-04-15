import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./favoritiesMovies/reducer";
import userSlice  from "../redux/userInfo/userSlice";

export const store = configureStore({
  reducer: {
    moviesFV: moviesSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
