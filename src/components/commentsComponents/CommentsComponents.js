import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ServiceFetch} from "../../services/fetch.service/fetch.service";
import {CommentComponent} from "../index";

const CommentsComponents = () => {
   const [comments, setComments] = useState([]);

   const {id} = useParams();

   useEffect(()=>{
       ServiceFetch.comment(id).then(value => setComments([...value]))
   },[id])

    return (
        <div>
            {comments.map(value => <CommentComponent key={value.id} comments = {value} />)}
        </div>
    );
};

export default CommentsComponents;