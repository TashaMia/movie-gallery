import { Link, useNavigate } from "react-router-dom";
import { TFilm } from "../../entities/film-card-entities/models/types/TFilm";
import Grade from "../../features/grade/ui/Grade";
import { useAppSelector } from "../../app/global-store/hooks/reduxTypes";
import { SpinnerGap, Spiral, YinYang } from "@phosphor-icons/react";

export default function ShortFilmCard(props: { film: TFilm }) {
  const grade = props.film.Grade;
  const { isLoading } = useAppSelector((state) => state.filmListReducer);
  return (
    <div className=" flex items-center shadow-md p-4  justify-center  bg-white  rounded-md bg-neural-900 text-black ">
      {isLoading ? (
        <div className="flex justify-center items-center h-80 w-80 ">
          <SpinnerGap
            width={32}
            height={32}
            className="animate-spin text-orange-500/50"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <Link to={`/${props.film.id}`}>
            <div
              style={{ backgroundImage: `url(${props.film.Poster})` }}
              className=" h-52 w-80 flex-shrink-0 justify-between rounded-xl flex gap-8 items-end text-stone-100 bg-cover"
            ></div>

            <div className="flex flex-col items-start w-80  gap-2">
              <p className="break-words font-mono  text-sm">
                {props.film.Title}
              </p>
              <p className="break-words font-mono text-slate-600 text-xs">
                {props.film.Plot}
              </p>
            </div>
          </Link>

          <Grade id={props.film.id} grade={grade} />
        </div>
      )}
    </div>
  );
}
