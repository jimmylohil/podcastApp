import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect,} from 'react-router-dom';
import CategoryWelcomePage from'./Components/CategoryWelcomePage';
import LoginComp from'./Components/LoginComp';
import RegisterComp from'./Components/RegisterComp';
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

  const data = {
    logo : require( "./images/podlogo_text_dark.png" ),
    loginUrl : "https://iseeliao.localtunnel.me/main/login",
    registerUrl : "https://iseeliao.localtunnel.me/main/signup",
    categoryListUrl : "",
    userToken : ""
  }
  
  const [loggedIn] = React.useState(false);

  // component for header
  const WithHeaderComp = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        <>
            <HeaderComp data={data}/>
            <Component {...props} />
        </>
    )} />
)
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
        <Route exact path="/login" component={() => <LoginComp data={data}/>} />
        <Route exact path="/register" component={RegisterComp} />
        <Route exact path="/categorywelcomepage" component={CategoryWelcomePage} />

        <WithHeaderComp path="/home" component={HomePageComp}/>
        <WithHeaderComp path="/recommendedforyou" component={RecommendedPageComp} />
        <WithHeaderComp path="/new-release" component={() => <DownListComp type="DownListUITypeEpisode" title="New Release" />} />
        <WithHeaderComp path="/trending" component={() => <DownListComp type="DownListUITypeEpisode" title="Trending" />} />
        <WithHeaderComp path="/subscription" component={() => <DownListComp type="DownListUITypeEpisode" title="Subscription" />} />
        <WithHeaderComp path="/showpage" component={ShowPageComp} />
        <WithHeaderComp path="/episodepage" component={EpisodePageComp} />
        <WithHeaderComp path="/userpage" component={UserPageComp} />
        <WithHeaderComp path="/recently-played" component={RecentlyPlayedComp} />
        <WithHeaderComp path="/playlist" component={PlaylistPageComp} />
        <WithHeaderComp path="/dashboard" component={DashboardPageComp} />
        <WithHeaderComp path="/insight" component={InsightForPodcasterComp} />
      </div>
    </Router>
    </div>
  );
}

export default App;
