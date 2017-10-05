import React, {Component} from 'react';

export default class Header extends Component {
  render(){
    // using passed in props
    return (
      <h1>{ this.props.title }</h1>
    );
  }
}
