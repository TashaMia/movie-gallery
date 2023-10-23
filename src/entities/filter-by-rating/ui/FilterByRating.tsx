import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import Rating from "../../../entities/rating/ui/Rating";
import { getRating } from "../../../pages/films/redusers/FilmListSlice";

export default function FilterByRating() {
  const dispatch = useAppDispatch();
  function setFilter(rating: number) {
    dispatch(getRating(rating));
    setCurrentRating(rating);
  }
  const [currentRating, setCurrentRating] = useState(0);
  return (
    <div className="w-60 flex flex-col gap-2">
      <h3 className="font-mono ">Rate:</h3>
      <Rating rating={currentRating} onChange={setFilter} />
    </div>
  );
}
