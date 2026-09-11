import { PostDelete } from "./PostDelete";
import { PostEdit } from "./PostEdit";

function PostItem({ post, index }) {
  return (
    <>
      <div
        key={index}
        className="bg-white flex justify-between items-center w-1/2 mx-auto mb-4 p-4 border border-gray-200"
      >
        <div>
          <h3 className="title text-lg mb-2">{post.title}</h3>
          <p className="text-xs">{post.content}</p>
        </div>

        <PostEdit post={post}></PostEdit>
        <PostDelete post={post}></PostDelete>
      </div>
    </>
  );
}

export default PostItem;
