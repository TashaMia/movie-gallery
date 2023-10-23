import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/global-store/hooks/reduxTypes";
import { fetchComments } from "../../../features/comments/model/reducers/ActionCreator";
import Comment from "../../../entities/comment-card-entities/ui/Comment";
import CommentAdder from "../../../features/comment-adder/ui/CommentAdder";

export default function CommentSection(props: {
  id: number | null | "" | undefined;
}) {
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector((state) => state.commentListReducer);
  useEffect(() => {
    dispatch(fetchComments(props));
  }, []);
  return (
    <div className="flex flex-col gap-4 ">
      <CommentAdder id={props.id} />
      {comments?.length > 0 &&
        comments?.map((comment) => {
          return <Comment comment={comment} />;
        })}
    </div>
  );
}
