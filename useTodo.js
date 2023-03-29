import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const onNewToDo = (toDo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: toDo,
        }

        dispatch( action );
    }

    const onDeleteToDo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        dispatch( action );
    }

    const onToogleTodo = (id) => {
        console.log(id)
        const action = {
            type: '[TODO] Toogle Todo',
            payload: id,
        }

        dispatch( action );
    }


    return{
        onNewToDo,
        onDeleteToDo,
        onToogleTodo,
        todos,
        countToDo: todos.length,
        countPendingToDo: todos.filter(todo => !todo.done).length,
    }
}
