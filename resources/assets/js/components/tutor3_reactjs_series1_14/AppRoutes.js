import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact={true} path="/" component={ Featured } />
          <Route exact={true} path="/archives" component={ Archives } />
          <Route exact={true} path="/settings" component={ Settings } />
          <Route exact={true} path="/submit" component={ Submit }  history={ history } />
          <Route exact={true} path="/makingitup" render={() => (
            <div>
              <h2>Another way to use Route</h2>
              <Featured fname={ this.state.fname } lname={ this.state.lname } />
            </div>
          )} />

          <Route render={function (){
            return(
              <div>
                <h2>Display "page not found using 'Switch'" <br /> Another way to use Route </h2>
                <p>PAGE NOT FOUND!</p>
              </div>
            )
          }} />
        </Switch>
      </div>
    );
  }
}
