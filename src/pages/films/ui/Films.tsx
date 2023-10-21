import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { TFilm } from "../../../entities/film-card-entities/models/types/TFilm";
import ShortFilmCard from "../../../widgets/short-film-card-widget/ShortFilmCard";
import FiltersSection from "../../../widgets/filters-section/ui/FiltersSection";
import { useEffect } from "react";
import { fetchFilms } from "../redusers/ActionCreator";

export default function Films() {
  const { isLoading, error } = useAppSelector((state) => state.filmListReducer);
  const dispatch = useAppDispatch();

  //   const filmsFromStorageString = localStorage.getItem("sort-film-list");
  //   const filmsFromStorage =
  //     filmsFromStorageString && JSON.parse(filmsFromStorageString);
  const { films } = useAppSelector((state) => state.filmListReducer);
  useEffect(() => {
    dispatch(fetchFilms({ filterName: null, filter: null }));
  }, []);
  return (
    <div className="flex items-stretch justify-between bg-slate-100  min-h-screen p-4">
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {films &&
            films?.map((film: TFilm) => {
              return <ShortFilmCard key={film.id} film={film} />;
            })}
        </div>
      )}
      <FiltersSection />
    </div>
  );
}
