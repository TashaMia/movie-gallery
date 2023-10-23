import { TFilm } from "../models/types/TFilm";

export default function FilmCard(props: {
  id: number | "" | null | undefined;
  film: TFilm;
}) {
  return (
    <div className="flex flex-col bg-neural-900 text-slate-300 pt-4">
      <div className="flex flex-col  gap-4">
        <div className="flex pl-4">
          <div
            style={{ backgroundImage: `url(${props.film?.Poster})` }}
            className="w-56 bg-cover h-60 bg-slate-600 "
          ></div>
          <div className="text-slate-700 leading-4 pr-4 w-[252px] flex flex-col gap-2  text-xs text-start  pl-4">
            <p className="text-red-800  text-lg font-semibold ">
              {props.film?.Title}
            </p>
            <p> Year: {props.film?.Year}</p>
            <p> Runtime: {props.film?.Runtime} min</p>
            <p> Genre: {props.film?.Genre}</p>
            <p>Country: {props.film?.Country}</p>
            <p>imdbRating: {props.film?.imdbRating}/10</p>
            <p>Writer: {props.film?.Writer}</p>
            <p>Director: {props.film?.Director}</p>
            <p>Language: {props.film?.Language}</p>
          </div>
        </div>
        <p className="text-slate-500 leading-6 pl-4 pb-4  text-sm text-start    break-words">
          {props.film?.Plot}
        </p>
      </div>
      <div className="h-[1px] w-screen bg-slate-100"></div>
    </div>
  );
}
