import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../app/database/supabase";

export const fetchFilms = createAsyncThunk(
  "filmList/fetchAll",
  async ({
    filterName,
    filter,
  }: {
    filterName: string | null;
    filter: number | null;
  }) => {
    let { data } = await supabase.from("films").select("*");
    if (filterName == "rating" && filter) {
      let { data } = await supabase
        .from("films")
        .select("*")
        .gt("imdbRating", `${filter}`)
        .lt("imdbRating", `${filter && filter + 1}`);
      return data;
    }
    if (filterName == "runtime" && filter) {
      let { data } = await supabase
        .from("films")
        .select("*")
        .eq("Runtime", `${filter}`);
      return data;
    }
    const films = await data;

    return films;
  }
);
