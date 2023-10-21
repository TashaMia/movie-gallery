import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { fetchFilm } from "../../../widgets/film-card-widgets/model/reducers/ActionCreator";
import { useParams } from "react-router-dom";

export default function FilmCard() {
  const { film, isLoading, error } = useAppSelector(
    (state) => state.filmReducer
  );
  const params = useParams();
  const id = params.id;
  console.log(typeof id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilm(id));
  }, []);
  console.log(film);
  return (
    <div className="flex flex-col bg-neural-900 text-slate-300 pl-4 pt-4">
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="flex">
          <div
            style={{ backgroundImage: `url(${film?.Poster})` }}
            className="w-56 bg-cover h-60 bg-slate-600"
          ></div>
          <div className="text-slate-300  text-start  pl-4">
            <p className="text-red-800 font-semibold text-xl">{film?.Title}</p>
            <p> Year: {film?.Year}</p>
            <p> Genre: {film?.Genre}</p>
            <p>Country: {film?.Country}</p>
            <p>imdbRating: {film?.imdbRating}</p>
            <p>Writer: {film?.Writer}</p>
            <p>Director: {film?.Director}</p>
            <p>Language: {film?.Language}</p>
          </div>
        </div>
      )}
    </div>
  );
}
