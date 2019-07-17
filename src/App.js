import React from 'react';
import './App.css';
import HeaderComp from './Components/HeaderComp';
//import CategoryPageComp from './Components/CategoryPageComp';
import ShowPageComp from './Components/ShowPageComp';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      {/* <CategoryPageComp /> */}
      <ShowPageComp />
    </div>
  );
}

export default App;
