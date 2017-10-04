import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class TodoItem extends Component {
  render() {
    return(
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

// propTypes is a way to validate your component's properties
TodoItem.propTypes = {
  todo : PropTypes.object
}

export default TodoItem;
