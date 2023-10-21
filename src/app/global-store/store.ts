import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmListReducer from "../../pages/films/redusers/FilmListSlice";
import filmReducer from "../../widgets/film-card-widgets/model/reducers/FilmSlice";
const rootReducer = combineReducers({
  filmListReducer,
  filmReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
