import tasks from '../assets/images/tasks.jpg';
import '../assets/styles/GuestPage.css';
import { useHistory } from "react-router-dom";

const GuestPage= () => {
    let guestHistory = useHistory();

    function onProceed () {
        guestHistory.push("/login");
    }

    return (
        <div className='tasks'>
            <div className='tasks-guest'>
                <div className='tasks-guest__img'>
                    <img src={tasks} alt='To do list'></img>
                </div>
                <div className='tasks-guest__text'>
                    <h1>Let's get started by creating the first task</h1>
                    <button className='tasks-guest__button button' onClick={onProceed}>Proceed</button>
                </div>
            </div>
        </div>
    );
}

export default GuestPage; 