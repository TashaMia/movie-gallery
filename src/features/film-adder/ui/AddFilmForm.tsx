import { X } from "@phosphor-icons/react";
import { useState } from "react";
import FileAdder from "../../file-adder/ui/FileAdder";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { addFilm } from "../model/reducers/ActionCreator";

export default function AddFilmForm(props: {
  setAddFilmForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [writer, setWriter] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [language, setLanguage] = useState("");
  const { poster } = useAppSelector((state) => state.addFilmReducer);
  const filmData = {
    Title: title,
    Plot: plot,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Country: country,
    imdbRating: imdbRating,
    Writer: writer,
    Director: director,
    Language: language,
    Poster: poster,
    Actors: actors,
    Grade: null,
  };
  const dispatch = useAppDispatch();

  function handlerInput(
    e: React.FormEvent<HTMLInputElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) {
    state(e.currentTarget.value);
  }

  return (
    <div className="w-screen text-slate-500 h-screen fixed bg-black/30 inset-0 font-mono flex justify-center items-center">
      <div className="w-80 p-4 bg-white rounded-md flex flex-col gap-4">
        <div className="flex justify-end items-center gap-20">
          <h3>Add film</h3>
          <button onClick={() => props.setAddFilmForm(false)}>
            <X />
          </button>
        </div>
        <div className=" flex  gap-2 items-center text-xs">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="border inline border-slate-200 rounded-md py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setTitle)}
            value={title}
          ></input>
        </div>
        <div className=" flex  gap-2 items-center text-xs">
          <label htmlFor="plot">Plot:</label>
          <input
            type="text"
            id="plot"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setPlot)}
            value={plot}
          ></input>
        </div>
        <div className=" flex  gap-2 items-center text-xs">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setYear)}
            value={year}
          ></input>
        </div>
        <div className=" flex  gap-2 items-center text-xs">
          <label htmlFor="runtime">Runtime:</label>
          <input
            type="number"
            id="runtime"
            placeholder="Enter in minutes"
            className="border border-slate-200 rounded-md py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setRuntime)}
            value={runtime}
          ></input>
        </div>
        <div className=" flex  gap-2 items-center text-xs">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setGenre)}
            value={genre}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            className="border border-slate-200 rounded-md py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setCountry)}
            value={country}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="country">Actors:</label>
          <input
            type="text"
            id="actors"
            className="border border-slate-200 rounded-md py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setActors)}
            value={actors}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="imdbRating">imdbRating:</label>
          <input
            type="number"
            id="imdbRating"
            className="border border-slate-200 rounded-md py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setImdbRating)}
            value={imdbRating}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="writer">Writer:</label>
          <input
            type="text"
            id="writer"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setWriter)}
            value={writer}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setDirector)}
            value={director}
          ></input>
        </div>
        <div className=" flex gap-2 items-center text-xs">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            className="border border-slate-200 rounded-md  py-1 px-2 w-full"
            onInput={(e) => handlerInput(e, setLanguage)}
            value={language}
          ></input>
        </div>
        <div className="flex justify-between items-end">
          <FileAdder title={"Add poster"} />
          <button
            className="bg-gradient-to-br from-amber-400/80 to-orange-600 hover:to-orange-500  px-2 rounded-md text-white"
            onClick={() => {
              dispatch(addFilm(filmData));
              props.setAddFilmForm(false);
            }}
          >
            add film
          </button>
        </div>
      </div>
    </div>
  );
}
