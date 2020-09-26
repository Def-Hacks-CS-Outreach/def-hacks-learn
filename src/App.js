import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';

// component import
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LogIn from './components/authscreens/Login';
import Signup from './components/authscreens/Signup';
// import Recover from './components/authscreens/Recover';

// page import
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar2 from './components/common/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/signin" component={LogIn} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/reset" component={Recover} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
