import '../assets/styles/Footer.css';


const Private = ({isAuth, changeIsAuth}) => {
    if (isAuth === false) {
        return (
            <div className="content-container">
            <div className="private-denied">Access denied. You need to sign in.</div>
            <div className="private-btn-container">
                <button className="private-btn" onClick={changeIsAuth}>Sign In</button>
            </div>
            </div>
        )
    } 

    return (
        <div className='private-success'>
            <h2>
                Private zone
            </h2>
            <div>secret</div>
            <div className="private-btn-container">
                <button className="private-btn" onClick={changeIsAuth}>Sign Out</button>
            </div>
        </div>
    )
};

export default Private;