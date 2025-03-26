import { useState } from "react"
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
    let [todos, SetTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, SetNewTodo] = useState("");

    let addNewTask = () => {
        SetTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        SetNewTodo("");
    }

    let updateTodoValue = (event) => {
        SetNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        SetTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAllAsDone = () => {
        SetTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone:true,
                };
            }))
    }


    let markAsDone = (id) => {
        SetTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                }
                else {
                    return todo;
                }
            }
            ))
    }



    return (
        <div>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue} /> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}> {todo.task}  </span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp; &nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>

                    ))
                }
            </ul>
            <br />
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    )
}