import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TFilm } from "../../../../entities/film-card-entities/models/types/TFilm";
import { addFilm } from "./ActionCreator";

type TFilmSlice = {
  film: TFilm;
  poster: string;
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
    Grade: null,
  },
  poster: "",
  isLoading: false,
  error: "",
};

export const addFilmSlice = createSlice({
  name: "addFilm",
  initialState,
  reducers: {
    getPoster(state, action: PayloadAction<string>) {
      state.poster = action.payload;
    },
  },
  extraReducers: {
    [addFilm.fulfilled.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = false;
      state.error = "";
      state.film = action.payload;
    },
    [addFilm.pending.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = true;
    },
    [addFilm.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getPoster } = addFilmSlice.actions;

export default addFilmSlice.reducer;
