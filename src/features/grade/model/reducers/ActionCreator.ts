import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../../app/database/supabase";

export const gradeFilms = createAsyncThunk(
  "film/gradeFilms",
  async ({
    filmId,
    grade,
  }: {
    filmId: number | "" | null | undefined;
    grade: number | null;
  }) => {
    let { data } = await supabase
      .from("films")
      .update({ Grade: grade })
      .eq("id", filmId)
      .select();
    console.log(filmId);
    return data;
  }
);
