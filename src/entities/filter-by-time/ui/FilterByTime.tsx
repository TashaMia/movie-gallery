import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/global-store/hooks/reduxTypes";
import { getRuntime } from "../../../pages/films/redusers/FilmListSlice";

export default function FilterByTime() {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(e: React.FormEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }
  useEffect(() => {
    dispatch(getRuntime(+inputValue));
  }, [inputValue]);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-60 gap-2 ">
      <label htmlFor="time" className="font-mono ">
        Write time in minutes:
      </label>
      <input
        type="text"
        id="time"
        value={inputValue}
        placeholder="For example: 102"
        onInput={(e) => {
          inputHandler(e);
        }}
        className="w-80 border border-slate-200 rounded-md p-2 text-slate-400 outline-orange-400 placeholder:text-slate-400 dark:bg-slate-200 dark:outline-orange-500"
      />
    </div>
  );
}
