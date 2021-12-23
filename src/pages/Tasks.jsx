import { useContext } from 'react';
import { UserContext } from '../UserContext';
import '../assets/styles/Tasks.css';
import ToDo from '../components/ToDo';

const Tasks = () => {
    const { isAuth } = useContext(UserContext);

    return (
        <>
            {isAuth ? (
                <ToDo />
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

export default Tasks; 