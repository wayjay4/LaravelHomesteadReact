import React, {Component} from 'react';

export default class Submit extends Component {
  constructor(){
    super();

    this.state = {

    };

    this.submitRecipe = this.submitRecipe.bind(this);
  }

  submitRecipe(){
    console.log("button clicked for submit");

    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <h3>Submit</h3>

        <button onClick={ this.submitRecipe }>Submit a recipe</button>
      </div>
    );
  }
}
