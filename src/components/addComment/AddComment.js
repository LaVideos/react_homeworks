import React from 'react';
import {useForm} from "react-hook-form";

const AddComment = () => {

    const{register,handleSubmit}=useForm();
    
    const foo = (item) => {
        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: 'POST',
            headers:  {'Content-type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(item),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit(foo)}>
               name - <input type="text" {...register('name')}/>
               email -  <input type="text"{...register('email')}/>
               body -  <input type="text"{...register('body')}/>

                <button>Send</button>
            </form>
        </div>
    );
};

export default AddComment;