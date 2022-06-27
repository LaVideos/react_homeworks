import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../services/axios.services";

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(id).then(value => setPosts([...value]));
    }, [id])

    return (
        <div>
            {posts.map((item, index) => <div key={index}>{item.id} - {item.title}</div>)}
        </div>
    );
};

export default Posts;