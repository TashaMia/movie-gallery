import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { getRuntime } from "../../../pages/films/redusers/FilmListSlice";
import { fetchFilms } from "../../../pages/films/redusers/ActionCreator";

export default function FilterByTime() {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(e: React.FormEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }
  const { runtime } = useAppSelector((state) => state.filmListReducer);
  useEffect(() => {
    dispatch(
      fetchFilms({ filterName: "runtime", filter: runtime ? runtime : null })
    );
  }, [runtime]);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-60 gap-2 ">
      <label htmlFor="time" className="font-mono font-bold">
        Write time in minutes:
      </label>
      <input
        type="text"
        id="time"
        value={inputValue}
        placeholder="For example: 102"
        onInput={(e) => {
          inputHandler(e);
          dispatch(getRuntime(+inputValue));
        }}
        className="w-48 border border-slate-200 rounded-md p-2 text-slate-400 outline-orange-400 placeholder:text-slate-200"
      />
    </div>
  );
}
