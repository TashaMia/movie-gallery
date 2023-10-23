import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchFilms } from "./ActionCreator";
import { TFilm } from "../../../entities/film-card-entities/models/types/TFilm";

type TFilmList = {
  films: TFilm[];
  rating: null | number;
  grade: null | number;
  runtime: null | number;
  filteredFilms: TFilm[];
  isLoading: boolean;
  error: string;
};

const initialState: TFilmList = {
  films: [],
  rating: null,
  runtime: null,
  grade: null,
  filteredFilms: [],
  isLoading: false,
  error: "",
};

export const filmListSlice = createSlice({
  name: "filmList",
  initialState,
  reducers: {
    sortingByReleaseTime(state, action: PayloadAction<string>) {
      if (state.films.length > 0) {
        const sorted = [...state.films]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "old") {
              return +firstFilm.Year - +secondFilm.Year;
            }
            if (action.payload == "new") {
              return +secondFilm.Year - +firstFilm.Year;
            }
            return 0;
          }
        );
        state.films = sorted;
      }
      if (state.filteredFilms.length > 0) {
        const sorted = [...state.filteredFilms]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "old") {
              return +firstFilm.Year - +secondFilm.Year;
            }
            if (action.payload == "new") {
              return +secondFilm.Year - +firstFilm.Year;
            }
            return 0;
          }
        );
        state.filteredFilms = sorted;
      }
    },
    sortingByTime(state, action: PayloadAction<string>) {
      if (state.films.length > 0) {
        const sorted = [...state.films]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "shorter") {
              return +firstFilm.Runtime - +secondFilm.Runtime;
            }
            if (action.payload == "longer") {
              return +secondFilm.Runtime - +firstFilm.Runtime;
            }
            return 0;
          }
        );

        state.films = sorted;
      }
      if (state.filteredFilms.length > 0) {
        const sorted = [...state.filteredFilms]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "shorter") {
              return +firstFilm.Runtime - +secondFilm.Runtime;
            }
            if (action.payload == "longer") {
              return +secondFilm.Runtime - +firstFilm.Runtime;
            }
            return 0;
          }
        );

        state.filteredFilms = sorted;
      }
    },
    sortingByRating(state, action: PayloadAction<string>) {
      if (state.films.length > 0) {
        const sorted = [...state.films]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "lowest") {
              return +firstFilm.imdbRating - +secondFilm.imdbRating;
            }
            if (action.payload == "highest") {
              return +secondFilm.imdbRating - +firstFilm.imdbRating;
            }
            return 0;
          }
        );

        state.films = sorted;
      }
      if (state.filteredFilms.length > 0) {
        const sorted = [...state.filteredFilms]?.sort(
          (firstFilm: TFilm, secondFilm: TFilm) => {
            if (action.payload == "lowest") {
              return +firstFilm.imdbRating - +secondFilm.imdbRating;
            }
            if (action.payload == "highest") {
              return +secondFilm.imdbRating - +firstFilm.imdbRating;
            }
            return 0;
          }
        );

        state.filteredFilms = sorted;
      }
    },
    getRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    getGrade(state, action: PayloadAction<number>) {
      state.grade = action.payload;
    },
    getRuntime(state, action: PayloadAction<number>) {
      state.runtime = action.payload;
    },
    getFilteredFilms(state, action: PayloadAction<TFilm[]>) {
      state.filteredFilms = action.payload;
    },
  },
  extraReducers: {
    [fetchFilms.fulfilled.type]: (state, action: PayloadAction<TFilm[]>) => {
      state.isLoading = false;
      state.error = "";
      state.films = action.payload;
    },
    [fetchFilms.pending.type]: (state, action: PayloadAction<TFilm[]>) => {
      state.isLoading = true;
    },
    [fetchFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  sortingByReleaseTime,
  sortingByTime,
  sortingByRating,
  getRating,
  getGrade,
  getRuntime,
  getFilteredFilms,
} = filmListSlice.actions;
export default filmListSlice.reducer;
