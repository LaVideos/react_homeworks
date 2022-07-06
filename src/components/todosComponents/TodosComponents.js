import React, {useEffect, useState} from 'react';
import {ServiceFetch} from "../../services/fetch.service/fetch.service";
import {TodosComponent} from "../index";

const TodosComponents = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        ServiceFetch.todos().then(value => setTodos([...value]));
    },[])



    return (
        <div>
            {
                todos.map(value => <TodosComponent key={value.id} todos = {value} />)
            }
        </div>
    );
};

export default TodosComponents;