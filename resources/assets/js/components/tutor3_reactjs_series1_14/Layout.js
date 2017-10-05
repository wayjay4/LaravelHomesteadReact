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
    // note: when passing methods to another component, you must remember
    // to 'bind' the method to this component, otherwise the method will
    // operate as if it was created in the component it was passed to
    return (
      <div className="container">
        <Header
          title={ this.state.title }
          changeTitle={ this.changeTitle.bind(this) }
        />

        <p>Hello, my name is { this.state.firstname } { this.state.lastname }</p>

        <Footer />
      </div>
    )
  }
}
