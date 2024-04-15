import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FavoritiesMoviesState } from "./interfaces";

const initialState: FavoritiesMoviesState = {
  favoriteMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    AddDeleteFavoriteMovieAction: (state, action: PayloadAction<any>) => {
      const movieIndex = state.favoriteMovies.findIndex(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (movieIndex === -1) {
        state.favoriteMovies = [...state.favoriteMovies, action.payload];
      } else {
        const updatedFavorites = state.favoriteMovies.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        );
        return {
          ...state,
          favoriteMovies: updatedFavorites,
        };
      }
    },
  },
});

export const { AddDeleteFavoriteMovieAction } = moviesSlice.actions;
export default moviesSlice.reducer;
