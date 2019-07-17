import React, { Component } from 'react';
import logo from './baguette-pain-png-2.png';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SecurityContainer from './container/SecurityContainer';
import BakeryContainer from './container/BakeryContainer';
import ProfileBanner from "./container/ProfilBanner";
import HomeButton from "./components/HomeButton";

class App extends Component {

  render() {
    const styles= {
      width:200  
    }
    const user = localStorage.getItem("user_name");
    const message = user ? <h2> Bienvenue : {user}</h2> : '';
    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" style={styles} />
               { message }
          <ProfileBanner/>
         
                   
          
        <HomeButton />
          <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/security" component={SecurityContainer} />
            <Route path="/" component={SecurityContainer} />             
          </Switch>
          
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
