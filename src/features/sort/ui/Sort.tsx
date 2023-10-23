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
  const [sortOptionIfVisible, setSortOptionIsVisible] =
    useState("By release time:");
  const sortByTimeReleaseButtons = [
    { id: "old", text: "🎞 old ones first" },
    { id: "new", text: "🎥 new ones first" },
  ];
  const sortByTimeButtons = [
    { id: "longer", text: "🍿 longer ones first" },
    { id: "shorter", text: "🤏 shorter ones first" },
  ];
  const sortByRateButtons = [
    { id: "highest", text: "🚀 highest rating" },
    { id: "lowest", text: "📉 lowest rating" },
  ];

  return (
    <div className=" w-60 flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          onClick={() => setSortOptionIsVisible("By release time:")}
          className="hover:bg-slate-300/50 p-2 rounded-md"
        >
          <h2 className="font-mono">{"By release time"}</h2>
        </button>
      </div>
      {sortOptionIfVisible == "By release time:" && (
        <RadioGroup
          name="By release time:"
          buttons={sortByTimeReleaseButtons}
          onChange={setSortByTimeRelease}
          currentId={sortByTimeRelease}
          sort={sortingByReleaseTime}
        />
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setSortOptionIsVisible("By time:")}
          className="hover:bg-slate-300/50 p-2 rounded-md"
        >
          <h2 className="font-mono">{"By time"}</h2>
        </button>
      </div>
      {sortOptionIfVisible == "By time:" && (
        <RadioGroup
          name="By time:"
          buttons={sortByTimeButtons}
          onChange={setSortByTime}
          currentId={sortByTime}
          sort={sortingByTime}
        />
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setSortOptionIsVisible("By rating:")}
          className="hover:bg-slate-300/50 p-2 rounded-md"
        >
          <h2 className="font-mono">{"By rating"}</h2>
        </button>
      </div>
      {sortOptionIfVisible == "By rating:" && (
        <RadioGroup
          name="By rating:"
          buttons={sortByRateButtons}
          onChange={setSortByRate}
          currentId={sortByRate}
          sort={sortingByRating}
        />
      )}
    </div>
  );
}
