import { memo, useState } from "react"
import './Todoapp.scss'


const Todoapp = () => {
    const [value, setValue] = useState("");
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }
    const [todos, setTodos] = useState([]);

    const addTodos = () => {
        setTodos([...todos, value]);
        setValue("");
    }
    const deleteTodos = (id) => {
        setTodos(todos.filter((index) => index !== id))
    }
    const editTodos = (id) => {
        setTodos(todos.map((index) => index === id ? { ...index, isEditing: !index.isEditing } : index));
    };
    const updateTodo = () => {
        setTodos(todos, map((index) => index === id ? {
            ...index, task, isEditing: !index.isEditing
        } : index))
    };



    return (
        <div className="todo-wrapper">
            <h1>What's the Plan for Today</h1>
            <form action="input" onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder="Add a todo......." onChange={(e) => setValue(e.target.value)} />
                <button onClick={addTodos}>Add Todo</button>
            </form>
            <div className="todo">
                {todos.map((item, index) => (
                    item.isEditing ? (
                        <form action="input">
                            <input type="text" value={task} placeholder="Update task......" onChange={(e) => setTask(e.target.value)} />
                            <button onClick={() => updateTodo(index)}>Update Task</button>
                        </form>
                    ) : (
                        <div className="todo-list" key={index}>
                            <p>{item}</p>
                            <div className="todo-icon">
                                <i className="fa-solid fa-xmark" onClick={() => deleteTodos(item)}></i>
                                <i className="fa-solid fa-pen" onClick={() => editTodos(item)}></i>
                            </div>
                        </div>)
                ))}
            </div>
        </div>
    )

}
export default memo(Todoapp)