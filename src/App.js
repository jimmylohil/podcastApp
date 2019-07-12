import React from 'react';
import './App.css';
import HomeContainerComp from './Components/HomeContainerComp';
import RecommendedComp from './Components/RecommendedComp';

function App() {
  return (
    <div className="App">
      <HomeContainerComp />
      <RecommendedComp />
    </div>
  );
}

export default App;
