import { create } from "zustand"
import axios from "axios";


export const usePostStore = create((set, get) => ({
    //посты
    posts: [],
    post: {
        title: "",
        content: "",
    },

    //записать посты
    setPosts: newPosts => set(() => ({
        posts: newPosts
    })),

    setPost: newPost => set(() => ({
        post: newPost
    })),

    //получить посты
    getPosts: async () => {
        const res = await axios.get("http://localhost:3000/posts");
        get().setPosts(res.data);
    },

    getPost: async (id) => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        get().setPost(res.data);
    },



    storePost: async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:3000/posts`, get().post);
        get().setPost({
            title: "",
            content: "",
        });
    },

    updatePost: async (e) => {
        e.preventDefault();

        const res = await axios.patch(`http://localhost:3000/posts/${get().post.id}`, get().post);
    },

    deletePost: async (id) => {
        const res = await axios.delete(`http://localhost:3000/posts/${id}`);

        const newPosts = get().posts.filter(postItem => postItem.id !== id)
        get().setPosts(newPosts)
    },

    handlePost: (e) => {
        const name = e.target.name;
        const value = e.target.value;
        get().setPost({ ...get().post, [name]: value });
    },

}))