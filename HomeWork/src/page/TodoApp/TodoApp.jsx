import React, { useReducer } from 'react'
import './TodoApp.scss'
import useStore from '../../hooks/useStore'
import { actions } from '../../store'
import { ADD_TODO } from '../../constants/storeConstant'


const TodoApp = () => {
    const [state, dispatch] = useStore();
    return (
        <div className='todoapp'>
            <div className={`todo ${state.theme ? "dark" : ""}`}>
                <h1>Todo</h1>
                <input
                    type="text"
                    placeholder='Enter your todo'
                    value={state.todoInput}
                    onChange={e => dispatch(actions.setInputTodo(e.target.value))}
                />
                <button onClick={() => dispatch({ type: ADD_TODO })}>Add todo</button>
                <ul>
                    {
                        state?.todos && state.todos.map((item, index) => (
                            <li key={index}>
                                <p style={{ display: 'inline' }}>
                                    {item}
                                </p>
                                <button onClick={() => dispatch(actions.deleteTodo(index))}>&times;</button>
                                <button onClick={() => dispatch(actions.updateTodo(index))}>Sửa</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default TodoApp