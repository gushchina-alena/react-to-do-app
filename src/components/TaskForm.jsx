import { useState } from 'react';

function TaskForm({ addTask }) {
    
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    
    return (
        <form>
            <input 
                className='todo-input'
                value={userInput}
                onChange={handleChange}
                placeholder='Add a task...'
            />        
            <button onClick={handleClick} className='todo-button'>Add</button>
        </form>
    )
}

export default TaskForm;