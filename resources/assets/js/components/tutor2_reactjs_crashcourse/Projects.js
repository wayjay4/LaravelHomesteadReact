import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'; // ES6

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map(project =>{
        //console.log(project);

        return(
          <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)} />
        );
      });
    }

    return(
      <div className="Projects">
        <h3>My Projects</h3>
        <ul>
          {projectItems}
        </ul>
      </div>
    );
  }
}

// propTypes is a way to validate your component's properties
Projects.propTypes = {
  projects : PropTypes.array,
  onDelete : PropTypes.func
}

export default Projects;
