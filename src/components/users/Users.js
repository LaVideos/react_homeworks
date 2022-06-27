import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/axios.services";
import {User} from "../index";

const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])


    return (
        <div>
            {users.map((item, index) => <User item = {item} key = {index} getUserId = {getUserId}/>)}
        </div>
    );
};

export default Users;