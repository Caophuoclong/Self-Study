import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO } from "./constants";


export const setTodoInput = (payload: string) =>{
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodo = (payload: string) =>{
    return {
        type: ADD_TODO,
        payload,
    }
}