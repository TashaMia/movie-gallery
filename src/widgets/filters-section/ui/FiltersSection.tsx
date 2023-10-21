import FilterByRating from "../../../features/filter-by-rating/ui/FilterByRating";
import FilterByTime from "../../../features/filter-by-time/ui/FilterByTime";
import Sort from "../../../features/sort/ui/Sort";

export default function FiltersSection() {
  return (
    <div className="flex flex-col items-end gap-4">
      <FilterByTime />
      <FilterByRating />
      <div className="flex flex-col gap-2">
        <h3 className="font-mono  font-bold">Sort films:</h3>
        <Sort />
      </div>
    </div>
  );
}
