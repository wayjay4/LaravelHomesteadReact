// Master.js
import React, {Component} from 'react';
//import { Router, Route, Link } from 'react-router';
import Projects from './Projects';

class Master extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }

  render(){
    return (
      <div className="container">
        <h1>My App</h1>
        
        <Projects projects={this.state.projects} />
      </div>
    )
  }
}

export default Master;
