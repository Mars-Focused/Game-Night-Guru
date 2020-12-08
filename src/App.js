import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import AddGame from "./Components/AddGame";
import GameList from "./Components/GameList";
import Axios from "axios";

/*
Update score needs to be written here
Delete app needs to be written here
component did mount makes a get request
create a new game makes a post request
after .post use setState
class components can use lifecycle methods
like component did mount component did update
and can hold state
*/

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gamesArr: [],
      // userInput: "",
    };
    //this is how we give explicit content to this
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.removeGame = this.removeGame.bind(this);
    this.upvoteGame = this.upvoteGame.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  // This is how I got information from the back end
  componentDidMount() {
    Axios.get("/api/games").then((res) => {
      // console.log(res.data)
      this.setState({ gamesArr: res.data });
    });
  }

  //this needs to be changed to add e.target.value
  addGame(gameString) {
    console.log(gameString);
    Axios.post(`/api/games/${gameString}`).then((res) => {
      this.setState({ gamesArr: res.data });
    });
  }

  upvoteGame(id) {
    Axios.put(`/api/games/${id}`).then((res) => {
      this.setState({ gamesArr: res.data });
    });
  }

  removeGame(id) {
    Axios.delete(`/api/games/${id}`).then((res) => {
      this.setState({ gamesArr: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* this is my extra limb and I need to get rid of it / move it. */}
        {/* <input onChange={this.handleInputChange} /> */}
        <AddGame
          //these are the props
          addGame={this.addGame}
          userInput={this.state.userInput}
          testProp="test"
        />

        <GameList
          upvoteGame={this.upvoteGame}
          removeGame={this.removeGame}
          gamesArr={this.state.gamesArr}
        />
      </div>
    );
  }
}
