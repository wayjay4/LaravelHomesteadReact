// Layout.js
import React, {Component} from 'react';
import { Link } from 'react-router';
//import { NavLink } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
  constructor(){
    super();

    this.state = {
      firstname : "Waylon",
      lastname : "Dixon",
      title : "Default Title: Hello World!"
    };
  }

  changeTitle(title){
    this.setState({
      title : title
    });
  }

  navigate(){
    //console.log(this.props);
    this.props.history.pushState(null, "settings");
    //this.props.history.replaceState(null, "settings");
  }

  render(){
    return (
      <div className="container">
        <Header
          title={ this.state.title }
          changeTitle={ this.changeTitle.bind(this) }
        />

        <hr />

        <p>Hello, my name is { this.state.firstname } { this.state.lastname }</p>

        <hr />

        <div>
          <h1>Killer Instinct.net</h1>

          <ul>
            <li><Link to="/"><button>Home</button></Link></li>
            <li><Link to="archives"><button>Archives</button></Link></li>
            <li><button onClick={ this.navigate.bind(this) }>Settings</button></li>
          </ul>
        </div>

        <div>{ this.props.children }</div>

        <hr />

        <Footer />
      </div>
    )
  }
}
