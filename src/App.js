import React from 'react';
import './App.css';
import HeaderComp from './Components/HeaderComp';
import LinearListComp from './Components/LinearListComp';
// import NewRealeseComp from './Components/NewRealeseComp';
import Tester from './Components/Tester';
import LoginForm from './Components/LoginForm'
import RecommendedShowComp from './Components/RecommendedShowComp'


function App() {
  return (
    <div className="App">
      {/* <HeaderComp /> */}
      {/* <NewRealeseComp /> */}
      {/* <LinearListComp /> */}
      <RecommendedShowComp />
      <LoginForm />
      {/* <Tester /> */}
    </div>
  );
}

export default App;
