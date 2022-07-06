import React from 'react';

const TodosComponent = ({todos}) => {
    return (
        <div>
            {todos.title}
        </div>
    );
};

export default TodosComponent;