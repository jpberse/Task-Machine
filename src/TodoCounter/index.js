import React from 'react';
import { TodoContext } from '../Todocontext';
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos
        </h1>
    );
}

export { TodoCounter };