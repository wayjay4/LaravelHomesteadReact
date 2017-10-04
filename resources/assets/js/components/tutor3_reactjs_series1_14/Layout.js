// Layout.js
import React, {Component} from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
  render(){
    var list = [
      <Header />,
      <Header />,
      <Header />
    ];

    return (
      <div className="container">
        <div>
          <h3>One way of displaying three 'Headers' element/containers</h3>
          <Header />
          <Header />
          <Header />
        </div>

        <div>
          <h3>Another way of displaying three 'Headers' using javascript variables</h3>
          <p>This could be used to output list items.</p>
          <ul>
            { list }
          </ul>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
