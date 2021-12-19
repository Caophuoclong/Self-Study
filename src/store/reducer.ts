import { Reducer } from "react";
import {SET_TODO_INPUT} from "./constants";
import {ADD_TODO} from "./constants";

interface Action {
    type: string;
    payload: string;
}

type State  = {
    todos: Array<string>;
    todoInput: string;
}

const initState: State = {
    todos: [],
    todoInput: ""
}
const reducer : Reducer<State, Action> = (state: State, action: Action) => {
    const {type, payload} = action;
    console.log(payload);
    switch(type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: payload
            }
        case ADD_TODO:
            state.todos.push(state.todoInput);
            return {
                ...state,
                todoInput: "",
            };

        default:
            return state;
    }
}


export {initState};
export type {State, Action};
export default reducer;
