import { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../assets/styles/TasksProtected.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: userInput.id,
                task: userInput,
            }
            setTasks([...tasks, newItem])
        }
    }

    const removeTask = (id) => {
        setTasks([...tasks.filter((task) => task.id !== id)])
    }

    return (
        <>
            <section className='todo-list'>
            <h1>Tasks to complete ({tasks.length})</h1>
            <TaskForm addTask={addTask} />
        {tasks.map((task) => {
            return (
                <TaskList
                    task={task}
                    key={task.id}
                    removeTask={removeTask}
                />
            )
        })}
        </section>
        </>
    )
}

export default ToDoList;