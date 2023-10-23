import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/global-store/hooks/reduxTypes";
import { fetchFilms } from "../../../pages/films/redusers/ActionCreator";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(e: React.FormEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilms(inputValue));
  }, [inputValue]);
  return (
    <div>
      <input
        value={inputValue}
        onInput={(e) => inputHandler(e)}
        placeholder="enter title of film"
        className="w-80 p-2  outline-orange-400 rounded-md  "
      ></input>
    </div>
  );
}
