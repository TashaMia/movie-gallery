import { Star } from "@phosphor-icons/react";
import { useState } from "react";

export default function Rating({ rating, onChange }: any) {
  // const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  console.log(rating);

  return (
    <div className="flex gap-2 ">
      {[...Array(10)].map((_star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={(e) => {
                e.stopPropagation();
                onChange(currentRating);
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
