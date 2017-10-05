import React, {Component} from 'react';

import Title from './Header/Title';

export default class Header extends Component {
  handleChange(e){
    // event changes will provide an e object holding the event data from the calling element
    const title = e.target.value;

    // we calling the method passed down from the parent component
    this.props.changeTitle(title);
  }

  render(){
    return (
      <div>
        <Title title={ this.props.title } />

        <input value={ this.props.title } onChange={ this.handleChange.bind(this) } />
      </div>
    );
  }
}
