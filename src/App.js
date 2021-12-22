import Navbar from './components/Navbar'
import GuestPage from './pages/GuestPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import { useEffect, useState } from "react";
import Footer from './components/Footer';
import About from './pages/About';
import TasksProtected from './pages/TasksProtected';
import { UserContext  } from './UserContext';


function App() {

  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setisAuth(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isAuth, setisAuth }}>
      <Router>
          <div className='content-container'>
            <Navbar />
              <Switch>
                <Route exact path='/' component={About}></Route>
                    <Route path='/start' component={GuestPage}></Route>
                <Route path='/protected' component={TasksProtected}></Route>
                <Route path='/login'>
                  <LoginForm />
                </Route>
              </Switch>
              <Footer />
            </div>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
