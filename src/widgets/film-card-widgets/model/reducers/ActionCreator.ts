import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../../app/database/supabase";

export const fetchFilm = createAsyncThunk(
  "film/fetchOne",
  async (id: string | undefined) => {
    const { data } = await supabase.from("films").select("*").eq("id", id);
    const film = data && data[0];
    return film;
  }
);
