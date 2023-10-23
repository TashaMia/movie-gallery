import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../../app/database/supabase";
export const fetchComments = createAsyncThunk(
  "commentList/fetchAll",
  async (id: { id: number | null | "" | undefined }) => {
    let { data } = await supabase
      .from("films-comments")
      .select("*")
      .eq("film_id", id.id && id.id);
    return data;
  }
);
