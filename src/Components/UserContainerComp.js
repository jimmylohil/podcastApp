import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePageComp from'./HomePageComp';
import HeaderComp from'./HeaderComp';
import RecommendedPageComp from'./RecommendedPageComp';
import ShowPageComp from'./ShowPageComp';

function UserContainerComp() {
  
  return (
    <div className="root">
      <Router>
        <HeaderComp />
          <div>   
            <Route path="/home" component={HomePageComp} />
            <Route path="/showpage" component={ShowPageComp} />
            <Route path="/recommendedforyou" component={RecommendedPageComp} />
          </div>
      </Router>
    </div>
  );
}

export default UserContainerComp;
