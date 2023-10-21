import { useState } from "react";
import RadioGroup from "../../../shared/RadioGroup";
import {
  sortingByRating,
  sortingByReleaseTime,
  sortingByTime,
} from "../../../pages/films/redusers/FilmListSlice";

export default function Sort() {
  const [sortByTimeRelease, setSortByTimeRelease] = useState("old");
  const [sortByTime, setSortByTime] = useState("longer");
  const [sortByRate, setSortByRate] = useState("highest");
  const sortByTimeReleaseButtons = [
    { id: "old", text: "🎞 old ones first" },
    { id: "new", text: "🎥 new ones first" },
  ];
  const sortByTimeButtons = [
    { id: "longer", text: "🎞 longer ones first" },
    { id: "shorter", text: "🎥 shorter ones first" },
  ];
  const sortByRateButtons = [
    { id: "highest", text: "🎞 highest rating" },
    { id: "lowest", text: "🎥 lowest rating" },
  ];

  return (
    <div className=" w-60 flex flex-col gap-2">
      <RadioGroup
        name="By release time:"
        buttons={sortByTimeReleaseButtons}
        onChange={setSortByTimeRelease}
        currentId={sortByTimeRelease}
        sort={sortingByReleaseTime}
      />
      <RadioGroup
        name="By time:"
        buttons={sortByTimeButtons}
        onChange={setSortByTime}
        currentId={sortByTime}
        sort={sortingByTime}
      />
      <RadioGroup
        name="By rating:"
        buttons={sortByRateButtons}
        onChange={setSortByRate}
        currentId={sortByRate}
        sort={sortingByRating}
      />
    </div>
  );
}
