import { useState, useEffect } from "react";
import axios from "axios";
import { usePostStore } from "../../store/postStore";

export function Create() {
  const { handlePost, post, storePost, setPost } = usePostStore();

  useEffect(() => {
    setPost({
      title: "",
      content: "",
    });
  }, []);

  return (
    <div>
      <div className="bg-white p-4 my-2 border border-gray-200 w-full">
        <div className="mb-4">
          <input
            onChange={(e) => handlePost(e)}
            value={post.title}
            name="title"
            type="text"
            className="border-gray-200 border p-4 w-full"
            placeholder="title"
          />
        </div>
        <div className="mb-4">
          <textarea
            onChange={(e) => handlePost(e)}
            value={post.content}
            name="content"
            type="text"
            className="border-gray-200 border p-4 w-full"
            placeholder="content"
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={(e) => storePost(e)}
            className="inline-block px-3 py-2 bg-sky-500 text-white text-xs"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
