import React from 'react';

const NewUser = ({newUser}) => {
    return (
        <div>
            <div>id - {newUser.id}</div>
            <div>name - {newUser.name}</div>
            <div>username - {newUser.username}</div>
            <div>email - {newUser.email}</div>
        </div>
    );
};

export default NewUser;