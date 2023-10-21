import { Star } from "@phosphor-icons/react";
import { useState } from "react";
import { useAppDispatch } from "../../../app/global-store/hooks/reduxTypes";
import { getRating } from "../../../pages/films/redusers/FilmListSlice";

export default function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  console.log(rating);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2">
      {[...Array(10)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => {
                setRating(currentRating);
                dispatch(getRating(currentRating));
              }}
              className="hidden"
            ></input>
            <Star
              weight={currentRating <= (hover || rating) ? "fill" : "regular"}
              className="text-yellow-500 border-1 border-yellow-800"
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
