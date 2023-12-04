import React from "react";
import { TodoContext } from '../Todocontext'
import './TodoForm.css'

const TodoForm = () => {
    const { addTodo,
            setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue,] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Alimentar a los peces."
                value={newTodoValue}
                onChange={onChange}
                required
                />
            <div className="TodoForm-buttonContainer">
                <button 
                    type='button' 
                    onClick={onCancel} 
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancelar</button>
                <button 
                    type='button' 
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button--add"
                    >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };