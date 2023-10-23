import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TComment } from "../../../../entities/comment-card-entities/models/types/TComment";
import { addComments } from "./ActionCreator";
import { act } from "react-dom/test-utils";

type TCommentList = {
  comment: TComment;
  user_img: string;
  isLoading: boolean;
  error: string;
};

const initialState: TCommentList = {
  comment: {
    id: null,
    user_name: "",
    comment_text: "",
    film_id: "",
    user_img: "",
  },
  user_img: "",
  isLoading: false,
  error: "",
};

export const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    getUserImg(state, action: PayloadAction<string>) {
      state.user_img = action.payload;
    },
  },
  extraReducers: {
    [addComments.fulfilled.type]: (state, action: PayloadAction<TComment>) => {
      state.isLoading = false;
      state.error = "";
      state.comment = action.payload;
    },
    [addComments.pending.type]: (state, action: PayloadAction<TComment>) => {
      state.isLoading = true;
    },
    [addComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getUserImg } = addCommentSlice.actions;

export default addCommentSlice.reducer;
