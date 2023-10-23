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
    <div className=" gap-2  flex flex-col w-44 justify-center items-start p-2 bg-white rounded-md ">
      <div className="flex flex-col justify-start  gap-4">
        {buttons.map((button) => (
          <button
            className={`w-40 h-8 flex  justify-center text-xs font-mono items-center  rounded-sm ${
              currentId == button.id
                ? "bg-orange-500  hover:bg-orange-600  text-white"
                : "bg-slate-200 hover:bg-slate-300/70 "
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
