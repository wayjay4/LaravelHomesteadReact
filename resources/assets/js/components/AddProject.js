import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();

    this.state = {
      newProject : {}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is required.");
    }
    else{
      this.setState({newProject:{
        title : this.refs.title.value,
        category : this.refs.category.value
      }}, function (){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }

    e.preventDefault();
  }

  render() {
    let categories = ['Web Design','Web Development', 'Mobile Development'];

    let categoryOptions = categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return(
      <div>
        <h3>Add Project</h3>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>

          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
