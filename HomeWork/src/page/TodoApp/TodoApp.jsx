import React, { useReducer } from 'react'
import './TodoApp.scss'
import useStore from '../../hooks/useStore'
import { actions } from '../../store'
import { ADD_TODO } from '../../constants/storeConstant'

const TodoApp = () => {
    // const [todo, dispatch] = useReducer(reducer, initState);
    const [state, dispatch] = useStore();
    return (
        <div className='todoapp'>
            <h1>Todo</h1>
            <input type="text" value={state.todoInput} onChange={(e) => dispatch(actions.setInputTodo(e.target.value))} />
            <button onClick={() => dispatch({ type: ADD_TODO })}>Add todo</button>

            <ul>
                <li>Quét nhà &times;</li>
                <li>Rửa bát &times;</li>
                <li>Nấu cơm &times;</li>
                {
                    state.todos && state.todos.map((item, index) => (
                        <li key={index}>
                            <p style={{ display: 'inline' }}>
                                {item}
                            </p>
                            {/* <button onClick={() => dispatch(deleteTodo(index))}>&times;</button>
                            <button onClick={() => dispatch(updateTodo(index))}>Sửa</button> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoApp