import { useState } from 'react';

function TaskForm({ addTask }) {
    const [input, setInput] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }
    
    return (
        <form>
            <input 
                className='todo-input'
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder='Add a task...'
            />        
            <button onClick={onFormSubmit} className='todo-button'>Add</button>
        </form>
    )
}

export default TaskForm;