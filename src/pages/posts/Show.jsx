import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostStore } from "../../store/postStore";

export function PostShow() {
  const { id } = useParams();
  const { getPost, post } = usePostStore();

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <div>
      <div className="bg-white p-4 my-2 border border-gray-200 w-full">
        <h3 className="text-lg mb-2">{post.title}</h3>
        <p className="text-xs">{post.content}</p>
      </div>
    </div>
  );
}
