import { useState } from "react";
import AddFilmForm from "./AddFilmForm";
import { Plus } from "@phosphor-icons/react";

export default function FilmAdder() {
  const [addFilmForm, setAddFilmForm] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setAddFilmForm(true);
        }}
        className=" w-36 font-mono cursor-pointer text-white bg-orange-500 hover:bg-orange-600 rounded-md p-2 flex justify-center items-center gap-4"
      >
        Add film
        <Plus />
      </button>

      {addFilmForm && <AddFilmForm setAddFilmForm={setAddFilmForm} />}
    </div>
  );
}
