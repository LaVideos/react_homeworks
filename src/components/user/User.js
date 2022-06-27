import React from 'react';

const User = ({item,getUserId}) => {
    return (
        <div>
            <div>{item.name}</div>
            <button onClick={()=>{
                getUserId(item)
            }}>
                Show user`s Posts
            </button>
        </div>
    );
};
export default User;