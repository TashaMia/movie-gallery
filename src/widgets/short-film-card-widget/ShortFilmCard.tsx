import { Link } from "react-router-dom";
import { TFilm } from "../../entities/film-card-entities/models/types/TFilm";

export default function ShortFilmCard(props: { film: TFilm }) {
  return (
    <Link to={`/${props.film.id}`}>
      <div className="flex flex-col shadow-md p-2 items-center  bg-white  rounded-md bg-neural-900 text-black ">
        <div
          style={{ backgroundImage: `url(${props.film.Poster})` }}
          className=" h-52 w-80 flex-shrink-0 justify-between rounded-xl flex gap-8 items-end text-stone-100 bg-cover"
        ></div>

        <div className="flex flex-col items-start  gap-2">
          <p>{props.film.Title}</p>
          <p>{props.film.Year}</p>
        </div>
      </div>
    </Link>
  );
}
