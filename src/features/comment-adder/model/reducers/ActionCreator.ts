import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../../app/database/supabase";
import { TComment } from "../../../../entities/comment-card-entities/models/types/TComment";

export const addComments = createAsyncThunk(
  "comments/addComments",
  async (comment: TComment) => {
    let { data } = await supabase.from("films-comments").upsert(comment);
    return data;
  }
);
