import { PostContext } from "../../context/PostContext";
import { useContext } from "react";

export function PostDelete({ post }) {
  const { deletePost } = useContext(PostContext);

  return (
    <>
      <div>
        <span
          onClick={() => deletePost(post)}
          className="text-sx text-red-700 cursor-pointer"
        >
          Delete
        </span>
      </div>
    </>
  );
}
