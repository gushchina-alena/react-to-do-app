import Navbar from './components/Navbar'
import GuestPage from './pages/GuestPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import { useState } from "react";
import Footer from './components/Footer';
import About from './pages/About';
import TasksProtected from './pages/TasksProtected';
import { UserContext  } from './UserContext';


function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
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
