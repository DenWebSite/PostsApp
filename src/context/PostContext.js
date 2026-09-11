import React from "react";

export const PostContext = React.createContext({
    deletePost: () => { },
    editPost: () => { },
    posts: [],
})