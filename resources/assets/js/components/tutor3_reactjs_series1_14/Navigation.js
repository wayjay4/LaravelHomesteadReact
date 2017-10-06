import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render(){
    return(
      <div>
        <ul>
          <li><NavLink to="/" exact activeClassName="activeNav"><button>Home</button></NavLink></li>
          <li><NavLink to="/archives" activeClassName="activeNav"><button>Archives</button></NavLink></li>
          <li><NavLink to="/settings" activeClassName="activeNav"><button>Settings</button></NavLink></li>
          <li><NavLink to="/submit" activeClassName="activeNav"><button>Submit</button></NavLink></li>
        </ul>
      </div>
    );
  }
}
