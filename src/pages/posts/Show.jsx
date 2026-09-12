import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function PostShow() {
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

  return (
    <div>
      <div className="bg-white p-4 my-2 border border-gray-200 w-full">
        <h3 className="text-lg mb-2">{post.title}</h3>
        <p className="text-xs">{post.content}</p>
      </div>
    </div>
  );
}
