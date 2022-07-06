import React from 'react';
import {Link} from 'react-router-dom'

const PostComponent = ({post}) => {
    return (
        <div>
            {post.title} - <span> <Link to={post.id.toString()}>Comment</Link></span>
        </div>
    );
};

export default PostComponent;