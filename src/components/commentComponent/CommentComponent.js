import React from 'react';

const CommentComponent = ({comments}) => {
    return (
        <div>
            {
                comments.name
            }
        </div>
    );
};

export default CommentComponent;