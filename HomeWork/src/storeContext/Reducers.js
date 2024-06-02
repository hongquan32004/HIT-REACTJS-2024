import { ADD_TODO, DELETE_TODO, SET_THEME, SET_TODO_INPUT, UPDATE_TODO } from "../constants/storeConstant";

const initState = {
    todoInput: '',
    todos: [],
    theme: false
}


const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todoInput],
                todoInput: ''
            }
        case DELETE_TODO:
            const newtodos = [...state.todos];
            newtodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newtodos
            }
        case UPDATE_TODO:
            if (state.todoInput === "") {
                const getToDoInput = state.todos[action.index];
                return {
                    ...state,
                    todoInput: getToDoInput,
                };
            }
            const update = [...state.todos];
            update[action.index] = state.todoInput;
            return {
                ...state,
                todoInput: "",
                todos: update,
            };
        case SET_THEME:
            return {
                ...state,
                theme: !state.theme
            }
        default:
            throw new Error("Invalid action")
    }
}

export { initState }
export default reducer;