// Master.js
import React, {Component} from 'react';
//import { Router, Route, Link } from 'react-router';
import uuid from 'uuid';
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
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
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

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render(){
    return (
      <div className="container">
        <h1>My App</h1>

        <AddProject addProject={this.handleAddProject.bind(this)} />

        <hr />

        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    )
  }
}

export default Master;
