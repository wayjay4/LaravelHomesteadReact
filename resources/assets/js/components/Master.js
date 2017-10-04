// Master.js
import React, {Component} from 'react';
//import { Router, Route, Link } from 'react-router';
import Projects from './Projects';
import AddProject from './AddProject';

class Master extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
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
    });
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render(){
    return (
      <div className="container">
        <h1>My App</h1>

        <AddProject addProject={this.handleAddProject.bind(this)} />

        <Projects projects={this.state.projects} />
      </div>
    )
  }
}

export default Master;
