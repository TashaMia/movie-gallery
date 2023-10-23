import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../app/database/supabase";
import { TFilm } from "../../../entities/film-card-entities/models/types/TFilm";

export const fetchFilms = createAsyncThunk(
  "filmList/fetchAll",
  async (search: string | null) => {
    let { data } = await supabase.from("films").select("*");
    if (search) {
      let { data } = await supabase
        .from("films")
        .select("*")
        .textSearch("Title", search);
      return data;
    } else {
      let { data } = await supabase.from("films").select("*");
      return data;
    }
  }
);
