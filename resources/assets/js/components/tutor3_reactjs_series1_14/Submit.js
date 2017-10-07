import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Submit extends Component {
  constructor(){
    super();

    this.state = {

    };

    this.submitRecipe = this.submitRecipe.bind(this);
  }

  submitRecipe(){
    console.log("button clicked for submit");
    console.log(this.props);

    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <h3>Submit</h3>

        <button onClick={ this.submitRecipe }>Submit a recipe</button>
        <br />
        <NavLink to="/settings">Go To Settings</NavLink>
      </div>
    );
  }
}
