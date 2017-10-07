import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';
import Submit from './pages/Submit';

export default class AppRoutes extends Component {
  constructor(){
    super();

    this.state = {
      fname : "Waylon",
      lname : "Dixon"
    };
  }

  render(){
    return(
      <div>
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
    );
  }
}
