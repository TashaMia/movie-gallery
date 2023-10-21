import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchFilm } from "./ActionCreator";
import { TFilm } from "../../../../entities/film-card-entities/models/types/TFilm";

type TFilmSlice = {
  film: TFilm;
  isLoading: boolean;
  error: string;
};

const initialState: TFilmSlice = {
  film: {
    id: null,
    Title: "",
    Year: "",

    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Poster: "",
    imdbRating: "",
  },
  isLoading: false,
  error: "",
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilm.fulfilled.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = false;
      state.error = "";
      state.film = action.payload;
    },
    [fetchFilm.pending.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = true;
    },
    [fetchFilm.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmSlice.reducer;
