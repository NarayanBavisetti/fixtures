import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from './components/login'
import Home from './components/home'

class Main extends Component {
    render() {
  
      return (
        <React.Fragment>
          <Router>
            
                
                <Route exact path="/features" component={Signup} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/home" component={Home} />
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;