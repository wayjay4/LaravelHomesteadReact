import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; // ES6

class Todos extends Component {
  render() {
    let todoItems;

    if(this.props.todos){
      todoItems = this.props.todos.map(todo =>{
        //console.log(project);

        return(
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }

    return(
      <div className="Todos">
        <h3>ToDo List</h3>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

// propTypes is a way to validate your component's properties
Todos.propTypes = {
  todos : PropTypes.array
}

export default Todos;
