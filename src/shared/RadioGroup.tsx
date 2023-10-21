import { useAppDispatch } from "../app/global-store/hooks/reduxTypes";
import {
  sortingByReleaseTime,
  sortingByTime,
} from "../pages/films/redusers/FilmListSlice";

export default function RadioGroup({
  name,
  buttons,
  onChange,
  currentId,
  sort,
}: {
  name: string;
  buttons: { id: string; text: string }[];
  onChange: (selectedId: string) => void;
  currentId: string;
  sort: any;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="border gap-2 border-slate-200 py-2 flex flex-col w-48 justify-center items-center rounded-md">
      <h3 className="font-mono text-xs">{name}</h3>
      <div className="flex flex-col gap-2">
        {buttons.map((button) => (
          <button
            className={`w-40 h-8 flex  justify-center text-xs font-mono items-center  bg-slate-200 rounded-sm ${
              currentId == button.id
                ? " bg-orange-500 bg-gradient-to-br from-amber-400/40 to-orange-500   text-white"
                : ""
            }`}
            onClick={() => {
              onChange(button.id);

              dispatch(sort(button.id));
              console.log(sort());
              // dispatch(sortByTime(button.id));
            }}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
}
