import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Edit() {
  const { id } = useParams();

  const [post, setPost] = useState({
    id: null,
    title: "",
    content: "",
  });

  const getPost = async () => {
    const res = await axios.get(`http://localhost:3000/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  //

  const handlePost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
    console.log(post);
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const res = await axios.patch(`http://localhost:3000/posts/${id}`, post);
  };

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
            onClick={(e) => updatePost(e)}
            className="inline-block px-3 py-2 bg-sky-500 text-white text-xs"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
