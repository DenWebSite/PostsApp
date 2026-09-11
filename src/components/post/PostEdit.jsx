import { PostContext } from "../../context/PostContext";
import { useContext } from "react";

export function PostEdit({ post }) {
  const { editPost } = useContext(PostContext);

  return (
    <>
      <div>
        <span
          onClick={() => editPost(post)}
          className="text-sx text-emerald-600 cursor-pointer"
        >
          Edit
        </span>
      </div>
    </>
  );
}
