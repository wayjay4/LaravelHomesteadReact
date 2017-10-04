import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

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

// propTypes is a way to validate your component's properties
ProjectItem.propTypes = {
  project : PropTypes.object,
  onDelete : PropTypes.func
}

export default ProjectItem;
