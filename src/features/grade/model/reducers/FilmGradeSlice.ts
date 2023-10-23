import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TFilm } from "../../../../entities/film-card-entities/models/types/TFilm";
import { gradeFilms } from "./ActionCreator";

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
    Grade: null,
  },
  isLoading: false,
  error: "",
};

export const filmGradeSlice = createSlice({
  name: "filmGrade",
  initialState,
  reducers: {},
  extraReducers: {
    [gradeFilms.fulfilled.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = false;
      state.error = "";
      state.film = action.payload;
    },
    [gradeFilms.pending.type]: (state, action: PayloadAction<TFilm>) => {
      state.isLoading = true;
    },
    [gradeFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmGradeSlice.reducer;
