import { useState } from "react";

function App() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handlePost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const storePost = (e) => {
    e.preventDefault();

    setPosts([...posts, post]);
  };

  const [posts, setPosts] = useState([]);

  return (
    <div className="bg-gray-500 min-h-screen p-4">
      <div className="bg-white w-1/2 mx-auto mb-4 p-4 border border-gray-200">
        <div className="mb-4">
          <input
            onChange={(e) => handlePost(e)}
            name="title"
            className="border border-gray-200 p-4 w-full"
            type="text"
            placeholder="title"
          />
        </div>
        <div className="mb-4">
          <textarea
            onChange={(e) => handlePost(e)}
            name="content"
            className="border border-gray-200 p-4 w-full"
            placeholder="content"
          />
        </div>
        <div>
          <a
            className="inline-block text-s px-3 py-2 text-white bg-sky-600 border-sky-700"
            href="#"
            onClick={(e) => storePost(e)}
          >
            Store
          </a>
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.title+post.content} className="bg-white w-1/2 mx-auto mb-4 p-4 border border-gray-200">
          <h3 className="title text-lg mb-2">{post.title}</h3>
          <p className="text-xs">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
