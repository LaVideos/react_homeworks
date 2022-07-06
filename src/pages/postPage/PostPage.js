import React from 'react';
import {Outlet} from "react-router-dom"

import {PostsComponents} from "../../components";

const PostPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <hr/>
            <PostsComponents/>
        </div>
    );
};

export default PostPage;