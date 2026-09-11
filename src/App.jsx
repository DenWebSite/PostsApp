import { useState } from "react";
import { PostContext } from "./context/PostContext";
import PostItem from "./components/post/PostItem";

function App() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [posts, setPosts] = useState([]);

  const [editingPost, setEditingPost] = useState({
    index: null,
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState([]);

  const [isModal, setIsModal] = useState(false);

  const editPost = (post) => {
    setIsModal(true);
    setEditingPost({
      index: posts.indexOf(post),
      title: post.title,
      content: post.content,
    });
  };

  const updatePost = (e) => {
    e.preventDefault();
    const newPosts = posts.map((post, index) => {
      if (index === editingPost.index) {
        return {
          title: editingPost.title,
          content: editingPost.content,
        };
      }
      return post;
    });

    setPosts(newPosts);

    setIsModal(false);
  };

  const deletePost = (post) => {
    const newPosts = posts.filter((postItem) => postItem !== post);
    setPosts(newPosts);
  };

  const handlePost = (e) => {
    setErrors([]);
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleEditingPost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditingPost({
      ...editingPost,
      [name]: value,
    });
  };

  const storePost = (e) => {
    e.preventDefault();
    if (validateFields().length > 0) return;

    setPosts([...posts, post]);

    setPost({
      title: "",
      content: "",
    });
  };

  const validateFields = () => {
    const newErrors = [];
    if (post.title === "") {
      newErrors.push({ message: "title field is required" });
    }
    if (post.content === "") {
      newErrors.push({ message: "content field is required" });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    }

    return newErrors;
  };

  return (
    <div className="bg-gray-500 min-h-screen p-4">
      {/* модалка */}
      {isModal && (
        <div onClick={() => setIsModal(false)} className="modal-shadow">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-1/2 mx-auto mb-4 p-4 border border-gray-200"
          >
            <div className="mb-4">
              <input
                onChange={(e) => handleEditingPost(e)}
                name="title"
                value={editingPost.title}
                className="border border-gray-200 p-4 w-full"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="mb-4">
              <textarea
                onChange={(e) => handleEditingPost(e)}
                value={editingPost.content}
                name="content"
                className="border border-gray-200 p-4 w-full"
                placeholder="content"
              />
            </div>
            <div>
              <a
                onClick={(e) => updatePost(e)}
                className="inline-block text-s px-3 py-2 text-white bg-sky-600 border-sky-700"
                href="#"
              >
                Update
              </a>
            </div>
          </div>
        </div>
      )}

      {/* основная форма */}
      <div className="bg-white w-1/2 mx-auto mb-4 p-4 border border-gray-200">
        <div className="mb-4">
          <input
            onChange={(e) => handlePost(e)}
            value={post.title}
            name="title"
            className="border border-gray-200 p-4 w-full"
            type="text"
            placeholder="title"
          />
        </div>
        <div className="mb-4">
          <textarea
            onChange={(e) => handlePost(e)}
            value={post.content}
            name="content"
            className="border border-gray-200 p-4 w-full"
            placeholder="content"
          />
        </div>

        {errors.length > 0 && (
          <div className="mb-4 text-red-500 text-xs">
            {errors.map((error, index) => (
              <div key={index}>{error.message}</div>
            ))}
          </div>
        )}

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

      {/* посты */}
      <PostContext value={{ deletePost, editPost, posts }}>
        {posts.map((post, index) => (
          <PostItem
            post={post}
            key={index}
            deletePost={() => deletePost(post)}
            editPost={() => editPost(post)}
          ></PostItem>
        ))}
      </PostContext>
    </div>
  );
}

export default App;
