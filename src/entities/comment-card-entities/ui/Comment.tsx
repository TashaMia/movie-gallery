import { TComment } from "../models/types/TComment";

export default function Comment(props: { comment: TComment }) {
  return (
    <div className="flex gap-2  bg-white rounded-md p-2">
      <img
        src={props.comment.user_img}
        alt="user image"
        className="w-12 h-12 rounded-full object-cover"
      ></img>
      <div className="flex flex-col gap-1 justify-start">
        <h3 className="font-mono ">{props.comment.user_name}</h3>
        <p className="font-mono text-sm leading-6 text-slate-500">
          {props.comment.comment_text}
        </p>
      </div>
    </div>
  );
}
