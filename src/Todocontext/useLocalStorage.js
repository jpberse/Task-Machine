import React from "react";

/* localStorage.removeItem('TODOS_V1');
const defaultTodos = [
  { text: 'Pagar cuenta del celu.', completed: true },
  { text: 'Terminar de ver Peaky Blinders.', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Salir el finde', completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItems;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
          } else {
            parsedItems = JSON.parse(localStorageItem);
            setItem(parsedItems)
          }
    
          setLoading(false);
        } catch(error){
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, [itemName, initialValue]);
    
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    }
    
    return {loading, error, item, saveItem};
  }

  export { useLocalStorage };