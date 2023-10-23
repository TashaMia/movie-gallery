import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { TFilm } from "../../../entities/film-card-entities/models/types/TFilm";
import ShortFilmCard from "../../../widgets/short-film-card-widget/ShortFilmCard";
import FiltersSection from "../../../widgets/filters-section/ui/FiltersSection";
import { useEffect, useState } from "react";
import { fetchFilms } from "../redusers/ActionCreator";
import Search from "../../../features/search/ui/Search";
import useFilter from "../../../features/filter/useFilter";
import {
  getFilteredFilms,
  sortingByReleaseTime,
} from "../redusers/FilmListSlice";
import FilmAdder from "../../../features/film-adder/ui/FilmAdder";

export default function Films() {
  const { isLoading, error } = useAppSelector((state) => state.filmListReducer);
  const dispatch = useAppDispatch();

  //   const filmsFromStorageString = localStorage.getItem("sort-film-list");
  //   const filmsFromStorage =
  //     filmsFromStorageString && JSON.parse(filmsFromStorageString);
  const { films, rating, runtime, filteredFilms } = useAppSelector(
    (state) => state.filmListReducer
  );
  const filter = useFilter();
  useEffect(() => {
    dispatch(getFilteredFilms(filter));
  }, [rating, runtime]);
  useEffect(() => {
    dispatch(fetchFilms(null));
  }, []);

  return (
    <div className="flex flex-col gap-4 md:flex-row lg:flex-row lg:px-10 lg:justify-center xl:justify-between lg:gap-80 pb-32 items-start justify-between  bg-slate-100  min-h-screen p-4 ">
      {error && <p>{error}</p>}
      <div className="flex flex-col gap-4">
        <FiltersSection />
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <FilmAdder />
        {filteredFilms.length > 0
          ? filteredFilms.map((film: TFilm) => {
              return <ShortFilmCard key={film.id} film={film} />;
            })
          : films?.map((film: TFilm) => {
              return <ShortFilmCard key={film.id} film={film} />;
            })}
      </div>
    </div>
  );
}
