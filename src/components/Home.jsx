import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

const Home = () => {
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

    return (
        <>
            <section className='todo-list'>
                <h1>tasks to complete: {tasks.length}</h1>
                <ToDoForm addTask={addTask} />
                {tasks.map((task) => {
                    return (
                        <ToDo
                        task={task}
                            key={task.id}
                            removeTask={removeTask}
                        />
                    )
                })}
            </section>
        </>
    );
};

export default Home; 