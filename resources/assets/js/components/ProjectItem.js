import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    //console.log('testing delete');
    this.props.onDelete(id);
  }

  render() {
    return(
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>&#10060;</a>
      </li>
    );
  }
}

export default ProjectItem;
