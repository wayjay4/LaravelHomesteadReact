import React, {Component} from 'react';

import Title from './Header/Title';

export default class Header extends Component {
  render(){
    // displaying passed in props
    //console.log(this.props);

    // passing a prop to the Title component
    return (
      <div>
        <Title title={ this.props.title } />
      </div>
    );
  }
}
