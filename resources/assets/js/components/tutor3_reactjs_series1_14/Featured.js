import React, {Component} from 'react';

export default class Featured extends Component {
  render(){
    return(
      <div>
        <h3>Featured</h3>
        <p>Hello, my name is { this.props.fname } { this.props.lname }</p>
      </div>
    );
  }
}
