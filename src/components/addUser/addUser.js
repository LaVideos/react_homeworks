import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import NewUser from "../newUser/newUser";

const AddUser = () => {

    const {register,handleSubmit, formState:{errors}}=useForm();


    const [newUser, setNewUser] = useState({});


    let submit = (obj) => {

        fetch("https://jsonplaceholder.typicode.com/users",  {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(obj),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => setNewUser({...result})) // чи можна якось витягнути змінене апі, тобто всіх юзерів разом з цим
            .catch(error => console.log('error', error));
    }

    return (
        // якщо в мене багато інпутів - то чи обов'язково прописувати всім register
        // чи є якийсь кращий, динамічніший варіант
        <div>
            <form action="" onSubmit={ handleSubmit(submit)}>
                id - <input type="text" {...register('id',{required:true})}/><br/>
                name- <input type="text" {...register('name',{required:true})}/><br/>
                username - <input type="text" {...register('username',{required:true})}/><br/>
                email -  <input type="text" {...register('email',{required:true})}/><br/>
                {
                    (errors.id || errors.name || errors.username || errors.email) && <span>All fields must be required</span>
                }
                <button>Submit</button>
            </form>

            <div><NewUser newUser = {newUser} key = {newUser.id} /></div>

        </div>
    );
};

export default AddUser;