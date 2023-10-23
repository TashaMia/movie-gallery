import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchComments } from "./ActionCreator";
import { TComment } from "../../../../entities/comment-card-entities/models/types/TComment";

type TCommentList = {
  comments: TComment[];
  isLoading: boolean;
  error: string;
};

const initialState: TCommentList = {
  comments: [],
  isLoading: false,
  error: "",
};

export const commentListSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.fulfilled.type]: (
      state,
      action: PayloadAction<TComment[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.comments = action.payload;
    },
    [fetchComments.pending.type]: (
      state,
      action: PayloadAction<TComment[]>
    ) => {
      state.isLoading = true;
    },
    [fetchComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentListSlice.reducer;
