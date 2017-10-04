// Master.js
import React, {Component} from 'react';

class Master extends Component {
  constructor(){
    super();

    this.projectname = "ReactJS Tutorial #3";
  }

  getVal(val){
   var result = "Wow, it's already the year "+val+"!";
    return result;
  }

  render(){
    const name = "Waylon";

    return (
      <div className="container">
        <h1>My App: Tutorial 3</h1>
        <p>It Works!</p>

        {/*
          note: anything inside {...} within a return() of a component will be treated as regular javascript code.
          some sample outputs using {} follows
        */}

        <p>Hi, { name }!</p>
        <p>You are currently working on { this.projectname }</p>
        <p>1+2 = { 3 }</p>
        <p>3+2 = { 3+2 }</p>
        <p>6+10 = { (function(){ return 16;})() }</p>
        <p>Some more data: '{ this.getVal(2017) }'</p>
      </div>
    )
  }
}

export default Master;
