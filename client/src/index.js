import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from './container/SecurityContainer';
import AnnonceContainer from './container/AnnonceContainer';
import UserContainer from './container/UserContainer';
import CommentContainer from './container/CommentContainer';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import rootReducer from "./redux/reducers";
import HomeButton from "./components/HomeButton/HomeButton";
import ListAnnonce from "./container/Annonce";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProfilePageInfo from "views/ProfilePage/ProfilePageInfo.jsx";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";

var hist = createBrowserHistory();
const store = createStore(rootReducer);

const user = localStorage.getItem("user_name");
    const message = user ? <h2> Bienvenue : {user}</h2> : '';

ReactDOM.render(
  
  <Provider store={store}>
    
    <BrowserRouter>
    
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={SecurityContainer} />
        <Route path="/security" component={SecurityContainer} />
        <Route path="/annonce" component={AnnonceContainer} />
        <Route path="/annonce/create" component={AnnonceContainer} />
        <Route path="/user" component={UserContainer} />
        <Route path="/user/:username" component={ProfilePageInfo} />
        <Route path="/comment" component={CommentContainer} />
        <Route path="/" component={Components} />
      </Switch>
      
      </BrowserRouter>
      
  </Provider>,
  document.getElementById("root"),
);
