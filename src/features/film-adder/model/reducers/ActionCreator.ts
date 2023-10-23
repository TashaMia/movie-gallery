import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../../app/database/supabase";
import { TFilm } from "../../../../entities/film-card-entities/models/types/TFilm";

export const addFilm = createAsyncThunk(
  "film/addFilm",
  async (filmId: TFilm) => {
    let { data } = await supabase.from("films").upsert(filmId);
    return data;
  }
);
