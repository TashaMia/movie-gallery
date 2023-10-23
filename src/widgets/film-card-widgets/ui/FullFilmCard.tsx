import { useEffect, useState } from "react";
import FilmCard from "../../../entities/film-card-entities/ui/FilmCard";
import Grade from "../../../features/grade/ui/Grade";
import { useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { fetchFilm } from "../model/reducers/ActionCreator";
import CommentSection from "../../comment-section-widget/ui/CommentSection";
import { SpinnerGap } from "@phosphor-icons/react";

export default function FullFilmCard() {
  const btns = ["Grade", "Comments"];
  const [changedSection, setChangetSection] = useState("Grade");
  const params = useParams();
  const id = params.id && (+params.id as number | "" | null | undefined);
  const { film, isLoading, error } = useAppSelector(
    (state) => state.filmReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilm(id));
  }, []);
  return (
    <div className="font-mono">
      {error && <p>{error}</p>}

      {isLoading ? (
        <div className="flex justify-center items-center  h-96 bg-slate-200">
          <SpinnerGap
            width={32}
            height={32}
            className="animate-spin text-orange-500/50"
          />
        </div>
      ) : (
        <FilmCard id={id} film={film} />
      )}
      <div className="flex gap-4 text-slate-800 pl-4">
        {btns.map((btn) => {
          return (
            <button
              className="hover:bg-slate-300/50 p-2 rounded-md "
              onClick={() => setChangetSection(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <div className="p-6">
        {changedSection == "Grade" && <Grade id={id} grade={film.Grade} />}
        {changedSection == "Comments" && <CommentSection id={id} />}
      </div>
    </div>
  );
}
