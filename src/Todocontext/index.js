import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,  
        loading, 
        error} = useLocalStorage('TODOS_V1', []);
    const [filterValue, setFilterValue] = React.useState(''); 
    const [openModal, setOpenModal] = React.useState(false); 
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;     
    
    const filteredTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const filterText = filterValue.toLowerCase();
        return todoText.includes(filterText);
    });
    
        const addTodo = (text) => {
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed: false
            })
            saveTodos(newTodos);

        }

        const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoindex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoindex].completed = !newTodos[todoindex].completed;
        saveTodos(newTodos);
    }
    
        const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoindex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoindex, 1)
        saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos, 
            totalTodos, 
            filterValue, 
            setFilterValue, 
            filteredTodos, 
            completeTodo, 
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };