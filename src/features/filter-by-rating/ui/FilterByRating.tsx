import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import Rating from "../../../entities/rating/ui/Rating";
import { fetchFilms } from "../../../pages/films/redusers/ActionCreator";

export default function FilterByRating() {
  const { rating } = useAppSelector((state) => state.filmListReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchFilms({ filterName: "rating", filter: rating ? rating : null })
    );
  }, [rating]);
  return (
    <div className="w-60 flex flex-col gap-2">
      <h3 className="font-mono font-bold">Rate:</h3>
      <Rating />
    </div>
  );
}
