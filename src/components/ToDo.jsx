import { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../assets/styles/Tasks.css';
import { customAlphabet } from 'nanoid';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const nanoid = customAlphabet('1234567890', 10);

    const addTask = (userInput) => {
        if (userInput) {
            const newTask = {
                id: Number(nanoid()),
                task: userInput,
                done: false
            }
            setTasks([...tasks, newTask])
        }
    }

    const isDone = (id) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : { ...task }
            )
        ])
    }

    const deleteTask = (id) => {
        setTasks([...tasks.filter((task) => task.id !== id)])
    }

    return (
        <>
            <section className='todo-list'>
                <h1>Tasks to complete ({tasks.length})</h1>
                <TaskForm addTask={addTask} />
                {/* <ReactScrollableFeed> */}
                {tasks.reverse().map((task) => {
                    return (
                        
                        <TaskList
                            task={task}
                            key={task.id}
                            deleteTask={deleteTask}
                            isDone={isDone}
                        />
                        
                    )
                })}
                {/* </ReactScrollableFeed> */}
            </section>
        </>
    )
}

export default ToDo;