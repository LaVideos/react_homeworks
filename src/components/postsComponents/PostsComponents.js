import React, {useEffect, useState} from 'react';
import {ServiceFetch} from "../../services/fetch.service/fetch.service";
import {PostComponent} from "../index";

const PostsComponents = () => {

    const [posts, setPost] = useState([])

    useEffect(()=>{
        ServiceFetch.post().then(value => setPost([...value]));
    },[])

    return (
        <div>
            {
                posts.map(value => <PostComponent key = {value.id} post = {value} />)
            }
        </div>
    );
};

export default PostsComponents;