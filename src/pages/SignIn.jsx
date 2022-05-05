import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../UserContext';
import userData from '../data/auth-users';
import '../assets/styles/SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState();
    const [passwordErr, setPasswordErr] = useState();

    const { setIsAuth } = useContext(UserContext);
    const history = useHistory();

    const emailIsCorrect = userData.find(user => user.email === email);
    const passwordIsCorrect = userData.find(user => user.password === password);

    function validateEmail() {
        if (email.trim() === '') {
            setEmailErr('Email is empty');
            return false;
        } else if (emailIsCorrect) {
            setEmailErr('');
            return true;
        } else {
            setEmailErr('Incorrect email');
            return false;
        }    
    }

    function validatePassword() {
        if (password.trim() === '') {
            setPasswordErr('Password is empty');
            return false;
        } else if (passwordIsCorrect) {
            setPasswordErr('');
            return true;
        } else {
            setPasswordErr('Incorrect password');
            return false;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
            if (passwordIsCorrect && emailIsCorrect) {
                setIsAuth(true);
                history.push("/protected");
            }
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={onSubmit}>
                <h1 className="form__title">Sign In</h1>
                <div className="form__input-block input-block">
                    <label className="input-block__label email">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-block__item"
                        placeholder="Enter the email" />
                        {emailErr && <div style={{color: 'red'}}>{emailErr}</div>}
                    
                </div>
                <div className="form__input-block input-block">
                    <label className="input-block__label">Password</label>
                    <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-block__item"
                        type="password"
                        placeholder="Enter the password" />
                    {passwordErr && <div style={{color: 'red'}}>{passwordErr}</div>}
                </div>
                <button className="button signin-btn" type="submit" onKeyPress={handleKeypress}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;