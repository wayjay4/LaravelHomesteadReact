// Layout.js
import React, {Component} from 'react';

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

  render(){
    return (
      <div className="container">
        <Header
          title={ this.state.title }
          changeTitle={ this.changeTitle.bind(this) }
        />

        <hr />

        <p>Hello, my name is { this.state.firstname } { this.state.lastname }</p>

        <div>{ this.props.children }</div>

        <hr />

        <Footer />
      </div>
    )
  }
}
