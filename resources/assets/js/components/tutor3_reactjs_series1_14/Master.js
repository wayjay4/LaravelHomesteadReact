// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

import Featured from './Featured';
import Archives from './Archives';
import Settings from './Settings';
import Submit from './Submit';

const history = createBrowserHistory();

export default class Master extends Component {
  constructor(){
    super();

    this.state = {
      title : "My Killer App!",
      fname : "Waylon",
      lname : "Dixon"
    };
  }

  changeTitle(title){
    this.setState({
      title : title
    });
  }

  render(){
    return (
      <div className="container">
        <Router>
          <div>
            <Navigation />

            <Header title={ this.state.title } changeTitle={ this.changeTitle.bind(this) } />

            <hr/>

            <Route exact={true} path="/" component={ Featured } />
            <Route path="/archives" component={ Archives } />
            <Route path="/settings" component={ Settings } />
            <Route path="/submit" component={ Submit }  history={ history } />
            <Route path="/makingitup" render={() => (
              <div>
                <h1>Another way to use Route</h1>
                <Featured fname={ this.state.fname } lname={ this.state.lname } />
              </div>
            )} />
          </div>
        </Router>

        <hr />

        <Footer />
      </div>
    )
  }
}
