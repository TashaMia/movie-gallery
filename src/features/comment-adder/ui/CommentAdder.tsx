import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import AddCommentForm from "./AddCommentForm";

export default function CommentAdder(props: {
  id: number | null | "" | undefined;
}) {
  const [addCommentForm, setAddCommentForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setAddCommentForm(true);
        }}
        className=" w-40 font-mono cursor-pointer text-white bg-orange-500 hover:bg-orange-600 rounded-md p-2 flex justify-center items-center gap-4"
      >
        Add comment
        <Plus />
      </button>

      {addCommentForm && (
        <AddCommentForm setAddCommentForm={setAddCommentForm} id={props.id} />
      )}
    </div>
  );
}
