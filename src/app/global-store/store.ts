import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmListReducer from "../../pages/films/redusers/FilmListSlice";
import filmGradeReducer from "../../features/grade/model/reducers/FilmGradeSlice";
import filmReducer from "../../widgets/film-card-widgets/model/reducers/FilmSlice";
import commentListReducer from "../../features/comments/model/reducers/CommentListSlice";
import addFilmReducer from "../../features/film-adder/model/reducers/addFilmSlice";
import addCommentReducer from "../../features/comment-adder/model/reducers/addCommentSlice";

const rootReducer = combineReducers({
  filmListReducer,
  filmReducer,
  filmGradeReducer,
  commentListReducer,
  addFilmReducer,
  addCommentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
