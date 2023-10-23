import { useState } from "react";
import FilterByRating from "../../../entities/filter-by-rating/ui/FilterByRating";
import FilterByTime from "../../../entities/filter-by-time/ui/FilterByTime";
import Sort from "../../../features/sort/ui/Sort";
import { CaretDown } from "@phosphor-icons/react";

export default function FiltersSection() {
  const [sortSectionIsVisible, setSortSectionIsVisible] = useState(false);
  const [filterSectionIsVisible, setFilterSectionIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 mb-4">
      <button
        className="flex gap-2 w-40 items-center p-2 rounded-md hover:bg-slate-200 "
        onClick={() => setFilterSectionIsVisible(!filterSectionIsVisible)}
      >
        <h3 className="font-mono  font-bold ">Filter films</h3>
        <CaretDown />
      </button>
      {filterSectionIsVisible && (
        <div className="flex flex-col gap-4">
          <FilterByTime />
          <FilterByRating />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <button
          className="flex gap-2 w-40 items-center p-2 rounded-md hover:bg-slate-200 "
          onClick={() => setSortSectionIsVisible(!sortSectionIsVisible)}
        >
          <h3 className="font-mono  font-bold ">Sort films</h3>
          <CaretDown />
        </button>
        {sortSectionIsVisible && <Sort />}
      </div>
    </div>
  );
}
