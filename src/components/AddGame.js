/*
props goes here so it can make a new game
post goes here
State here is User input
*/

import React, { Component } from "react";
// import App from "app.js";

//every time you make a functional component make sure you pass in props
class AddGame extends Component {
  // console.log(props);
  constructor() {
    super();
    this.state = {
      userInput: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value,
    });
    // return userInput;
  }

  render() {
    return (
      <div className="addgame">
        <input
          onChange={this.handleInputChange}
          type="text"
          name="gameinput"
        ></input>
        <button onClick={() => this.props.addGame(this.state.userInput)}>
          Add Game
        </button>
        {/* <h1>Im AddGame</h1> */}
      </div>
    );
  }
}

export default AddGame;
