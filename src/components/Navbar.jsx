import logo from '../assets/images/to-do-list.png';
import { Link } from "react-router-dom";
import style from '../assets/styles/Navbar.css';

const Navbar = () => {
    return (
        <>
        <header className='header'>
            <nav className='header__nav'>
                <li className='header__nav__logo'>
                <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                <Link className="head-title" to="/">To Do App</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/">Home</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/private">Create</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/login">Sign In</Link>
                </li>
            </nav>
        </header>
        </>
    )
}

export default Navbar; 