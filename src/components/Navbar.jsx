import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory, Link } from "react-router-dom";
import logo from '../assets/images/to-do-list.png';
import '../assets/styles/Navbar.css';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(UserContext);
    const history = useHistory();

    const signinSignout = () => {
        if (isAuth) {
            setIsAuth(false);
            history.push('/start')
        } else {
            history.push('/login')
        }
    }

    return (
        <>
            <header className='header'>
                <nav className='header__nav'>
                    <li className='header__nav__logo'>
                        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                        <Link className="head-title" to="/">To Do App</Link>
                    </li>
                    <li className="header__nav__link">
                        <Link className="header__nav__link" to="/">About</Link>
                    </li>
                    <li className="header__nav__link">
                        <Link className="header__nav__link" to="/start">Start</Link>
                    </li>
                    <li className="header__nav__link">
                        <Link className="header__nav__link" to="/protected">Tasks</Link>
                    </li>
                    <button className='button' onClick={signinSignout}>{isAuth ? 'Sign Out' : 'Sign In'}</button>
                </nav>
            </header>
        </>
    )
}

export default Navbar; 