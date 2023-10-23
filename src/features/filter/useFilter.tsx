import { useEffect } from "react";
import { getFilteredFilms } from "../../pages/films/redusers/FilmListSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/global-store/hooks/reduxTypes";

export default function useFilter() {
  const { films, rating, runtime } = useAppSelector(
    (state) => state.filmListReducer
  );
  const dispatch = useAppDispatch();

  const filteredFilms = films.filter((film) => {
    if (rating && runtime) {
      return Math.trunc(+film.imdbRating) == rating && +film.Runtime == runtime;
    }
    if (rating) {
      return Math.trunc(+film.imdbRating) == rating;
    }
    if (runtime) {
      return +film.Runtime == runtime;
    }
  });

  return filteredFilms;
}
