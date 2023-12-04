import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../Todocontext';

function AppUI() {
const {loading, error, filteredTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

return (
<>
    <TodoCounter/>
    <TodoFilter />
    
    <TodoList>
        {loading && (
            <> 
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
            </>
        )}
        {error && <TodosError />}
        {!loading && !filteredTodos.length && <EmptyTodos />}

        {filteredTodos.map(todo => {
            return <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
                />
        })}
    </TodoList>

    <CreateTodoButton setOpenModal={setOpenModal} />

    {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
    )}
</>
)
};

export { AppUI };