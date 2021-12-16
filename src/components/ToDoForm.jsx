import { useState } from 'react';


function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='todo-input'
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder='Add a task...'
            />        
            <button className='todo-button'>Add</button>
        </form>
    )
}

export default ToDoForm