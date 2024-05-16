import React, { useReducer } from 'react';


const initState = {
    todoInput: '',
    todos: []
}

const SET_INPUT_VALUE = 'set_input_value';
const ADD_TODO = 'add';
const DELETE_TODO = 'delete';
const UPDATE_TODO = 'update';

const setTodo = payload => {
    type: SET_INPUT_VALUE,
        payload
}
const deleteTodo = (index) => {
    type: DELETE_TODO,
        index
}
const updateTodo = (index) => {
    type: UPDATE_TODO,
        index
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                todoInput: action.payload
            }
    }
}











const Todoapp2 = () => {
    return (
        <div></div>
    )
}
export default Todoapp2;