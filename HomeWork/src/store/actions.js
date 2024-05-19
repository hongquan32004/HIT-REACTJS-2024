import { DELETE_TODO, SET_THEME, SET_TODO_INPUT, UPDATE_TODO } from "../constants/storeConstant";


export const setInputTodo = (payload) => ({
    type: SET_TODO_INPUT,
    payload
});
export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
});
export const updateTodo = (index) => ({
    type: UPDATE_TODO,
    index
});
export const setTheme = () => ({
    type: SET_THEME
})