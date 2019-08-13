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
import Player from './Components/Player';
import auth from './Components/auth';
import axios from 'axios';



function App() {
  // category List
  let options =[]
  axios.get('http://localhost:8000/api/category/list?token='.concat(sessionStorage.getItem("JWT")))
  .then(
    (response) => {
      response.data.categories.forEach(val => {
        options.push(val);
      })}
    ) 
    .catch(function(error){
      console.log(error);
    })
    

  const data = {
    logo : require( "./images/podlogo.png" ),
    loginUrl : "http://iseeliao.localtunnel.me/main/login",
    registerUrl : "http://iseeliao.localtunnel.me/main/signup",
    latestEpiUrl : "http://localhost:8000/api/latesteps/?token=",
    categoryList: options,
  }

  
  const PrivateRoute = ({component: Component, ...rest}) => (
    
    <Route {...rest} render={(props) => {
      if(auth.isLogin() === true) {
      return (
        <div>
          <HeaderComp data={data}/>
          <Component {...props} />
          {auth.isShow() ? <Player /> : null}
        </div>
      )}
      else {
      return (
        <Redirect to='/login' />
      )}
    }} />)


  return (
    <div className="App">
    <Router>
      <div>   

        <Route exact path="/" render={() => (
          auth.isLogin() ? (
            <Redirect to="/home"/>
          ) : (
            <Redirect to="/login"/>
          )
        )}/>


          <Route exact path="/login" render={props => <LoginComp data={data} {...props}/>} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/categorywelcomepage" render={props => <CategoryWelcomePage data={data} {...props}/>} />
              
          <PrivateRoute path="/home" component={() => <HomePageComp data={data}/> } />
          <PrivateRoute path="/recommendedforyou" component={RecommendedPageComp} />
          <PrivateRoute path="/new-release" component={() => <DownListComp type="DownListUITypeEpisode" title="New Release" />} />
          <PrivateRoute path="/trending" component={() => <DownListComp type="DownListUITypeEpisode" title="Trending" />} />
          <PrivateRoute path="/subscription" component={() => <DownListComp type="DownListUITypeEpisode" title="Subscription" />} />
          <PrivateRoute path="/showpage" component={ShowPageComp} />
          <PrivateRoute path="/episodepage/:uuid" component={EpisodePageComp} />
          <PrivateRoute path="/userpage" component={UserPageComp} />
          <PrivateRoute path="/recently-played" component={RecentlyPlayedComp} />
          <PrivateRoute path="/playlist" component={PlaylistPageComp} />
          <PrivateRoute path="/dashboard" component={DashboardPageComp} />
          <PrivateRoute path="/insight" component={InsightForPodcasterComp} />
        
        
        
      </div>
    </Router>
    </div>
  );
}

export default App;
