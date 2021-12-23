import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import { UserContext  } from './UserContext';
import SignIn from './pages/SignIn';
import Tasks from './pages/Tasks';
import Footer from './components/Footer';
import About from './pages/About';
import Navbar from './components/Navbar'
import Start from './pages/Start';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
          <div className='content-container'>
            <Navbar />
              <Switch>
                <Route exact path='/' component={About}></Route>
                <Route path='/start' component={Start}></Route>
                <Route path='/protected' component={Tasks}></Route>
                <Route path='/login' component={SignIn}></Route>
              </Switch>
              <Footer />
            </div>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
