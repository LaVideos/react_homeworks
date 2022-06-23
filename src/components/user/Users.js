// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)


import {useEffect, useState} from "react";

import {User} from "../index";

import {UserDetails} from "../index";

export default function Users(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=>value.json())
            .then(value => {
                setUsers(value)
            })
    },[])

    const [info,setInfo] = useState({})


    const getInfo =(value)=>{setInfo(value)}


    return(
        <div>

            {
                info && <UserDetails username ={info.username} email = {info.email}/>
            }

            {users.map((user,index)=><User
                user={user}
                key={index}
                getInfo={getInfo}
                info ={info}
            />)}
        </div>
    )
}
