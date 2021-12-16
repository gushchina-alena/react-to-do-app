import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Private from './components/Private';
import React, { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function changeIsAuth () {
    setIsAuth(prevState => !prevState);
}

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/private'>
              <Private isAuth={isAuth} changeIsAuth={changeIsAuth} />
            </Route>
            <Route path='/login'>
              <LoginForm isAuth={isAuth} changeIsAuth={changeIsAuth} />
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;