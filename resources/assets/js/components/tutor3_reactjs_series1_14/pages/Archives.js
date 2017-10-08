import React, {Component} from 'react';

export default class Archives extends Component {
  render(){
    console.log(this.props);

    const { params } = this.props.match;
    const { article } = params;

    const { location } = this.props;
    const { search } = location;

    return(
      <div>
        <h3>Archives</h3>

        <p>Article retrieved: '{ article }'</p>
        
        <p>Search retrieved: '{ search }'</p>
      </div>
    );
  }
}
