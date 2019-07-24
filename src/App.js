import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import UserContainerComp from'./Components/UserContainerComp';
import LoginFormComp from'./Components/LoginFormComp';
import RegisterFormComp from'./Components/RegisterFormComp';

function App() {
  const [loggedIn] = React.useState(false);
  
  return (
    <div className="App">
    <Router>
      <div>   
        <Route exact path="/" render={() => (
          loggedIn ? (
            <Redirect to="/home"/>
          ) : (
            <Redirect to="/login"/>
          )
        )}/>
        <Route path="/home" component={UserContainerComp} />
        <Route path="/login" component={LoginFormComp} />
        <Route path="/register" component={RegisterFormComp} />
      </div>
    </Router>
    </div>
  );
}

export default App;
