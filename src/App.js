import Tasks from './pages/Tasks'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import React, { useState } from "react";
import Footer from './components/Footer';
import Notes from './pages/Notes';
import About from './pages/About';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function changeIsAuth () {
    setIsAuth(prevState => !prevState);
}

  return (
    <Router>
        <div className='content-container'>
          <Navbar />
            <Switch>
              <Route exact path='/'>
                <About />
              </Route>
              <Route path='/tasks'>
                <Tasks />
              </Route>
              <Route path='/notes'>
                <Notes />
              </Route>
              <Route path='/login'>
                <LoginForm isAuth={isAuth} changeIsAuth={changeIsAuth} />
              </Route>
            </Switch>
            <Footer />
          </div>
    </Router>
  );
}

export default App;
