import { useContext } from 'react';
import { UserContext  } from '../UserContext';
import '../assets/styles/TasksProtected.css';
import ToDoList from '../components/ToDoList';

const TasksProtected = () => {
    const { isAuth } = useContext(UserContext);

    return (
        <>
                { isAuth ? (
                    <ToDoList />
            )
            : 
            (<div className='restricted'>
                <h1 className='restricted__message'>
            To view this page, you have to log in.</h1>
            </div>
            )
            }
            
        </>
    );
};

export default TasksProtected; 