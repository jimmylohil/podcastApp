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
import RecentlyPlayedComp from './Components/RecentlyPlayedComp';
import PlaylistPageComp from './Components/PlaylistPageComp';
import DashboardPageComp from './Components/DashboardPageComp';
import InsightForPodcasterComp from './Components/InsightForPodcasterComp';

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
        <Route path="/trending" component={() => <DownListComp type="DownListUITypeEpisode" title="Trending" />} />
        <Route path="/subscription" component={() => <DownListComp type="DownListUITypeEpisode" title="Subscription" />} />
        <Route path="/showpage" component={ShowPageComp} />
        <Route path="/episodepage" component={EpisodePageComp} />
        <Route path="/userpage" component={UserPageComp} />
        <Route path="/recently-played" component={RecentlyPlayedComp} />
        <Route path="/playlist" component={PlaylistPageComp} />
        <Route path="/dashboard" component={DashboardPageComp} />
        <Route path="/insight" component={InsightForPodcasterComp} />
      </div>
    </Router>
    </div>
  );
}

export default App;
