import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
} from "react-router-dom";


import NavigationComponent from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import portfolioDetail from './portfolio/portfolio-detail';
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";



export default class App extends Component {
  render() {
    return (
      <div className='container'>
        
        <Router>
          <div>
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/auth" component={Auth} />
              <Route exact path="/portfolio/:slug" component={portfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
