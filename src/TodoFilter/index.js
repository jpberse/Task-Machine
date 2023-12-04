import React from 'react';
import './TodoFilter.css';
import { TodoContext } from '../Todocontext';

function TodoFilter() {
    const {filterValue, setFilterValue} = React.useContext(TodoContext)

    return (
        <input placeholder="Cortar Zapallo" 
        className="TodoFilter" 
        value={filterValue}
        onChange={(event) => {
            setFilterValue(event.target.value);
        }}></input>
    );
}

export { TodoFilter };