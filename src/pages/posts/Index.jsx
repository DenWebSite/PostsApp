import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { usePostStore } from "../../store/postStore";

export function Index() {
  const {getPosts, posts, deletePost} = usePostStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="mb-4 pt-4">
        <Link
          to={"/posts/create"}
          className="inline-block px-3 py-2 bg-sky-500 text-white text-xs"
        >
          Create
        </Link>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 my-2 border border-gray-200 w-full flex justify-between"
        >
          <div>
            <h3 className="text-lg mb-2">{post.title}</h3>
            <p className="text-xs">{post.content}</p>
          </div>
          <div className="flex flex-col">
            <Link
              className="text-xs text-blue-400 mb-2"
              to={`/posts/${post.id}`}
            >
              more
            </Link>
            <Link
              to={`/posts/${post.id}/edit`}
              className="text-green-600 text-xs mb-2"
            >
              edit
            </Link>
            <button
              onClick={() => deletePost(post.id)}
              type="button"
              className="text-red-600 text-xs"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
