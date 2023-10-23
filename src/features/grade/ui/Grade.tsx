import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { gradeFilms } from "../model/reducers/ActionCreator";
import Rating from "../../../entities/rating/ui/Rating";

export default function Grade(props: {
  id: number | "" | null | undefined;
  grade: number | null;
}) {
  const dispatch = useAppDispatch();
  const [currentRating, setCurrentRating] = useState<number | null>(null);
  function setGrade(rating: number) {
    dispatch(gradeFilms({ filmId: props.id, grade: rating }));
    setCurrentRating(rating);
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="break-words font-mono text-slate-600 text-xs">
        My grade: {props.grade ? currentRating ?? props.grade : "-"}
      </p>
      <Rating rating={currentRating ?? props.grade} onChange={setGrade} />
    </div>
  );
}
