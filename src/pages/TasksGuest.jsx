import tasks from '../assets/images/tasks.jpg';
import '../assets/styles/TasksGuest.css';

const TasksGuest= () => {
    return (
        <div className='tasks'>
            <div className='tasks-guest'>
                <div className='tasks-guest__img'>
                    <img src={tasks} alt='To do list'></img>
                </div>
                <div className='tasks-guest__text'>
                    <h1>Sign in to add your first task</h1>
                    <button className='tasks-guest__button button'>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default TasksGuest; 