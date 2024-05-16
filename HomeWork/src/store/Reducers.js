import { SET_TODO_INPUT } from "../constants/storeConstant";

const initState = {
    todoInput: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        default:
            throw new Error("Invalid action")
    }
}

export { initState }
export default reducer;