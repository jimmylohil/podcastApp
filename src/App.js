import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LoginFormComp from'./Components/LoginFormComp';
import RegisterFormComp from'./Components/RegisterFormComp';
import HomePageComp from'./Components/HomePageComp';
import ShowPageComp from'./Components/ShowPageComp';
import EpisodePageComp from'./Components/EpisodePageComp';
import RecommendedPageComp from'./Components/RecommendedPageComp';
import HeaderComp from'./Components/HeaderComp';
import DownListComp from './Components/DownList/DownListComp';
import UserPageComp from './Components/UserPageComp';

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
        <Route path="/login" component={LoginFormComp} />
        <Route path="/register" component={RegisterFormComp} />
        <HeaderComp />
        <Route path="/home" component={HomePageComp} />
        <Route path="/recommendedforyou" component={RecommendedPageComp} />
        <Route path="/new-release" component={() => <DownListComp type="DownListUITypeEpisode" title="New Release" />} />
        <Route path="/recently-played" component={() => <DownListComp type="DownListUITypeEpisode" title="Recently Played" />} />
        <Route path="/trending" component={() => <DownListComp type="DownListUITypeEpisode" title="Trending" />} />
        <Route path="/subscription" component={() => <DownListComp type="DownListUITypeEpisode" title="Subscription" />} />
        <Route path="/showpage" component={ShowPageComp} />
        <Route path="/episodepage" component={EpisodePageComp} />
        <Route path="/userpage" component={UserPageComp} />
      </div>
    </Router>
    </div>
  );
}

export default App;
