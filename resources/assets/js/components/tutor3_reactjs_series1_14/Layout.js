// Layout.js
import React, {Component} from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
  constructor(){
    // super needs to called inside of a constructor
    super();

    // The mentality behind state is that state only gets used if this component has an internal value that only only effects this component, then this is appropriate.
    // Otherwise, you use props for anything else to inject data into other components.

    // any changes to the state will automatically trigger an html re-load for that state element
    this.state = {
      firstname : "Waylon",
      lastname : "Dixon",
      title : "Default Title: Hello World!"
    };

  }

  render(){
    // Props can be injected into any connected component.
    const title = "ReactJS Tutorial";

    // set a timer here to change the state to trigger an example of an automatic re-load
    setTimeout(() => {
      this.setState({
        firstname : "Rufus",
        lastname : "Mace",
        title : "Play Some League of Legends!"
       })
    }, 10000)

    return (
      <div className="container">
        {/* //passing state and props to the Title components */}
        <Header title={ this.state.title } />
        <Header title={ title } name={ "Some Name" } />
        <Header title={ "Another Title" } />

        {/* //using this state's values within this component only */}
        <p>Hello, my name is { this.state.firstname } { this.state.lastname }</p>

        <Footer />
      </div>
    )
  }
}
