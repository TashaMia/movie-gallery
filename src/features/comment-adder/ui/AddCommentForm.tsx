import { X } from "@phosphor-icons/react";
import FileAdder from "../../file-adder/ui/FileAdder";
import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { addComments } from "../model/reducers/ActionCreator";
import { fetchComments } from "../../comments/model/reducers/ActionCreator";

export default function AddCommentForm(props: {
  setAddCommentForm: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | null | "" | undefined;
}) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { user_img } = useAppSelector((state) => state.addCommentReducer);
  const commentData = {
    user_name: name,
    film_id: props.id as string,
    comment_text: text,
    user_img: user_img,
  };

  function handlerInput(
    e: React.FormEvent<HTMLInputElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) {
    state(e.currentTarget.value);
  }
  const dispatch = useAppDispatch();

  return (
    <div className="w-screen text-slate-500 h-screen fixed bg-black/30 inset-0 font-mono flex justify-center items-center">
      <div className="w-80 p-4 bg-white rounded-md flex flex-col gap-4">
        <div className="flex justify-end gap-24">
          <h3>Add comment</h3>
          <button onClick={() => props.setAddCommentForm(false)}>
            <X />
          </button>
        </div>
        <div className="flex  gap-2 items-center text-xs">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            onInput={(e) => handlerInput(e, setName)}
            value={name}
            className="border inline border-slate-200 rounded-md py-1 px-2 w-full"
          ></input>
        </div>
        <div className="flex  gap-2 items-center text-xs">
          <label htmlFor="comment_text">Comment</label>
          <input
            type="text"
            id="comment_text"
            onInput={(e) => handlerInput(e, setText)}
            value={text}
            className="border inline border-slate-200 rounded-md py-1 px-2 w-full"
          ></input>
        </div>
        <FileAdder title={"Add user avatar"} />
        <button
          className="bg-gradient-to-br from-amber-400/80 to-orange-600 hover:to-orange-500  px-2 rounded-md text-white"
          onClick={() => {
            dispatch(addComments(commentData));
            props.setAddCommentForm(false);
            dispatch(fetchComments({ id: props.id }));
          }}
        >
          add film
        </button>
      </div>
    </div>
  );
}
