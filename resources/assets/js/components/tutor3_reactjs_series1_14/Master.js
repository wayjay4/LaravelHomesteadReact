// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import AppRoutes from './AppRoutes';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const history = createBrowserHistory();

export default class Master extends Component {
  constructor(){
    super();

    this.state = {
      title : "My Killer App!",
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

            <AppRoutes />

            <hr />

            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}
